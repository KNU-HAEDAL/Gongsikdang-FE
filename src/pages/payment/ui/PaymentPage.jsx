import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { Header } from '@/shared/index.js';
import { fetchInstance } from '@/shared/instance/Instance';

import creditCard from '../assets/credit-card.png';
import kakaoPay from '../assets/kakao-pay.png';
import tossPay from '../assets/toss-pay.png';
import * as Payment from './PaymentPage.style';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };

  const [selectedPayment, setSelectedPayment] = useState('card'); // 기본 결제 수단: 신용카드
  const [pgProvider, setPgProvider] = useState('html5_inicis'); // 기본 PG사: KG이니시스

  const [usedPoints, setUsedPoints] = useState(0);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const pointBalance = 100000;
  const pointUsage = pointBalance >= totalAmount ? totalAmount : pointBalance;
  const finalAmount = totalAmount - pointUsage;

  useEffect(() => {
    if (!window.IMP) {
      alert('포트원 결제 모듈이 로드되지 않았습니다.');
    }
  }, []);

  const handlePayment = () => {
    if (!window.IMP) {
      alert('포트원 결제 모듈이 로드되지 않았습니다.');
      return;
    }

    const IMP = window.IMP;
    IMP.init('store-136fc171-1746-4039-9d66-e38eba9da13a'); // 포트원 가맹점 Store ID (테스트 모드)

    const merchantUid = `mid_${new Date().getTime()}`;

    // PG 설정
    let pgCode = '';
    switch (pgProvider) {
      case 'html5_inicis':
        pgCode = 'html5_inicis.INIpayTest'; // KG이니시스 (테스트 MID)
        break;
      case 'kakaopay':
        pgCode = 'kakaopay.TC0ONETIME'; // 카카오페이 (테스트 MID)
        break;
      case 'tosspay':
        pgCode = 'tosspay.tosstest'; // 토스페이 (테스트 MID)
        break;
      default:
        pgCode = 'html5_inicis.INIpayTest';
    }

    const paymentData = {
      pg: pgCode,
      pay_method: selectedPayment, // 'card' (신용카드), 'trans' (계좌이체) 등
      merchant_uid: merchantUid,
      name: '주문 상품',
      amount: finalAmount,
      buyer_email: 'test@example.com',
      buyer_name: '테스터',
      buyer_tel: '010-1234-5678',
      buyer_addr: '서울특별시 강남구',
      buyer_postcode: '123-456',
    };

    // 결제 요청
    IMP.request_pay(paymentData, async (response) => {
      if (response.success) {
        try {
          const token = sessionStorage.getItem('token');

          if (!token) {
            alert('로그인 정보가 없습니다. 다시 로그인해주세요.');
            navigate('/login');
            return;
          }

          // 백엔드로 결제 데이터 전송
          await fetchInstance.post(
            'http://localhost:8080/api/purchases',
            {
              merchantUid,
              date: new Date().toISOString(),
              totalAmount,
              paymentMethod: selectedPayment,
              pgProvider,
              items: cart.map((item) => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
              })),
              status: 'SUCCESS',
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // 재고 감소 요청
          await axios.post(
            'http://localhost:8080/menu/reduce',
            cart.map((item) => ({
              name: item.name,
              quantity: item.quantity,
            })),
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          alert('결제 성공 및 재고 감소 완료!');
          navigate('/barcode', {
            state: {
              merchantUid,
              cart,
            },
          });
        } catch (error) {
          console.error(
            '재고 감소 요청 실패:',
            error.response ? error.response.data : error.message
          );
          alert('결제 성공했지만 재고 감소 중 문제가 발생했습니다.');
        }
      } else {
        alert(`결제 실패: ${response.error_msg || '알 수 없는 오류 발생'}`);
      }
    });
  };
  return (
    <Payment.Background>
      <Payment.PaymentPageLayout>
        <Header title='결제' />
        <Payment.SubTitle>상품 결제</Payment.SubTitle>
        <Payment.WhiteBox>
          <Payment.Wrapper>
            <Payment.TotalText>육회비빔밥 x 1개</Payment.TotalText>
          </Payment.Wrapper>
          <Payment.WrapperWithBorder>
            <Payment.Wrapper>
              <Payment.TotalText> 총 수량 :1개</Payment.TotalText>
              <Payment.TotalText>{totalAmount}원</Payment.TotalText>
            </Payment.Wrapper>{' '}
          </Payment.WrapperWithBorder>
        </Payment.WhiteBox>

        <Payment.SubTitle>포인트 사용</Payment.SubTitle>
        <Payment.WhiteBox>
          <Payment.Wrapper>
            <Payment.TotalText>현재 내 포인트: </Payment.TotalText>
            <Payment.TotalText>100,000 point</Payment.TotalText>
            <Payment.PointButton>충전하기</Payment.PointButton>
          </Payment.Wrapper>
          <Payment.Wrapper>
            <Payment.TotalText>사용할 포인트: </Payment.TotalText>
            <Payment.TotalText>
              <Payment.PointInput
                min='0'
                max={pointBalance}
                value={usedPoints}
                onChange={(e) =>
                  setUsedPoints(Math.min(e.target.value, pointBalance))
                }
              />
              point
            </Payment.TotalText>
            <Payment.PointButton>사용</Payment.PointButton>
          </Payment.Wrapper>
        </Payment.WhiteBox>
        <Payment.SubTitle>총 결제 금액</Payment.SubTitle>
        <Payment.WhiteBox>
          <Payment.Wrapper>
            <Payment.TotalText>총 주문 금액</Payment.TotalText>
            <Payment.TotalText>{totalAmount}원</Payment.TotalText>
          </Payment.Wrapper>
          <Payment.Wrapper>
            <Payment.TotalText> 포인트 사용 </Payment.TotalText>
            <Payment.TotalText> 1,000 point</Payment.TotalText>
          </Payment.Wrapper>
          <Payment.WrapperWithBorder>
            <Payment.Wrapper>
              <Payment.TotalText>총 결제 금액</Payment.TotalText>
              <Payment.TotalText>{totalAmount}원 </Payment.TotalText>
            </Payment.Wrapper>
          </Payment.WrapperWithBorder>
        </Payment.WhiteBox>
        <Payment.SubTitle>결제 수단</Payment.SubTitle>
        <Payment.PaymentMethods>
          <Payment.MethodBox
            className={selectedPayment === 'credit-card' ? 'selected' : ''}
            onClick={() => {
              setSelectedPayment('credit-card');
              setPgProvider('html5_inicis');
            }}
          >
            <Payment.Image src={creditCard} />
          </Payment.MethodBox>
          <Payment.MethodBox
            className={selectedPayment === 'kakaopay' ? 'selected' : ''}
            onClick={() => {
              setSelectedPayment('kakaopay');
              setPgProvider('kakaopay');
            }}
          >
            <Payment.Image src={kakaoPay} />
          </Payment.MethodBox>
          <Payment.MethodBox
            className={selectedPayment === 'tosspay' ? 'selected' : ''}
            onClick={() => {
              setSelectedPayment('tosspay');
              setPgProvider('tosspay');
            }}
          >
            <Payment.Image src={tossPay} />
          </Payment.MethodBox>
        </Payment.PaymentMethods>
        <Payment.SubmitButton onClick={handlePayment}>
          결제하기
        </Payment.SubmitButton>
      </Payment.PaymentPageLayout>
    </Payment.Background>
  );
};

export default PaymentPage;
