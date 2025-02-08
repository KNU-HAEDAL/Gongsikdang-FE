import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { fetchInstance } from '@/shared/instance/Instance';
import * as Common from '@/shared/styles';

import kakaoPay from '../assets/kakao-pay.png';
import tossPay from '../assets/toss-pay.png';
import * as Payment from './PaymentPage.style';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };

  const [selectedPayment, setSelectedPayment] = useState('credit-card'); // 기본 결제 수단: 신용카드
  const [pgProvider, setPgProvider] = useState('html5_inicis'); // 기본 PG사: 이니시스 (신용카드)

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const pointBalance = 0; // 예시 포인트 잔액
  const pointUsage = pointBalance >= totalAmount ? totalAmount : pointBalance;
  const finalAmount = totalAmount - pointUsage;

  const handlePayment = () => {
    const IMP = window.IMP; // 아임포트 초기화
    IMP.init('imp17808248'); // 아임포트 "가맹점 식별코드"

    const merchantUid = `mid_${new Date().getTime()}`; // 주문번호 생성
    const paymentData = {
      pg: pgProvider, // PG사 설정
      pay_method: selectedPayment, // 결제 수단
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
            'http://localhost:8080/api/purchases', // 백엔드 API 주소
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
                Authorization: `Bearer ${token}`, // JWT 토큰 전달
              },
            }
          );

          // **재고 감소 요청 추가**
          await axios.post(
            'http://localhost:8080/menu/reduce', // 백엔드 재고 감소 API 주소
            cart.map((item) => ({
              name: item.name,
              quantity: item.quantity,
            })),
            {
              headers: {
                Authorization: `Bearer ${token}`, // JWT 토큰 전달
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
        alert(
          `결제 실패: ${response.error_msg || '알 수 없는 오류가 발생했습니다.'}`
        );
      }
    });
  };

  return (
    <Payment.PaymentPageLayout>
      {/* 상단 버튼 영역 */}
      <Common.TopButtons className='top-buttons'>
        {/* 뒤로 버튼 */}
        <Common.TopButton
          className='top-button back-button'
          onClick={() => navigate(-1)} // 이전 페이지로 이동
        >
          뒤로
        </Common.TopButton>

        {/* 홈 버튼 */}
        <Common.TopButton
          className='top-button home-button'
          onClick={() => navigate('/chooseRestaurant')} // ChooseRestaurant.js로 이동
        >
          홈
        </Common.TopButton>
      </Common.TopButtons>
      {/* 주문 상품 */}
      <Payment.SubTitle>주문 상품</Payment.SubTitle>
      {cart.map((item, index) => (
        <Payment.WhiteBox key={index}>
          <Payment.TotalText>{item.name}</Payment.TotalText>
          <Payment.Wrapper>
            <Payment.TotalText>수량: {item.quantity}개</Payment.TotalText>
            <Payment.TotalText>
              {item.price * item.quantity}원
            </Payment.TotalText>
          </Payment.Wrapper>
        </Payment.WhiteBox>
      ))}

      {/* 총 결제 금액 */}
      <Payment.SubTitle>총 결제 금액</Payment.SubTitle>
      <Payment.WhiteBox>
        <Payment.Wrapper>
          <Payment.TotalText>총 주문 금액</Payment.TotalText>
          <Payment.TotalText>{totalAmount}원</Payment.TotalText>
        </Payment.Wrapper>
      </Payment.WhiteBox>

      {/* 결제 방법 */}
      <Payment.SubTitle>결제 방법</Payment.SubTitle>
      <Payment.PaymentMethods>
        {/* 신용·체크카드 */}
        <Payment.MethodBox
          className={` ${selectedPayment === 'credit-card' ? 'selected' : ''}`}
          onClick={() => {
            setSelectedPayment('credit-card');
            setPgProvider('html5_inicis'); // 신용·체크카드는 이니시스 설정
          }}
        >
          <Payment.MethodText>신용·체크카드</Payment.MethodText>
        </Payment.MethodBox>
        {/* 카카오페이 */}
        <Payment.MethodBox
          className={` ${selectedPayment === 'kakaopay' ? 'selected' : ''}`}
          onClick={() => {
            setSelectedPayment('kakaopay');
            setPgProvider('kakaopay');
          }}
        >
          <Payment.Image
            src={kakaoPay}
            alt='카카오페이'
            className='method-icon'
          />
        </Payment.MethodBox>
        {/* 토스페이 */}
        <Payment.MethodBox
          className={` ${selectedPayment === 'tosspay' ? 'selected' : ''}`}
          onClick={() => {
            setSelectedPayment('tosspay');
            setPgProvider('tosspay');
          }}
        >
          <Payment.Image src={tossPay} alt='토스페이' className='method-icon' />
        </Payment.MethodBox>
      </Payment.PaymentMethods>

      {/* 결제하기 버튼 */}
      <Payment.SubmitButton onClick={handlePayment}>
        결제하기
      </Payment.SubmitButton>
      <button onClick={() => navigate('/review/food')}>
        음식리뷰 페이지로 돌아가기
      </button>
    </Payment.PaymentPageLayout>
  );
};

export default PaymentPage;
