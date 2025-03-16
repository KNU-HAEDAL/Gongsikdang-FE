import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetPoint } from '@/pages/mypage';

import { Spinner } from '@/shared/index.js';

import { purchaseAPI } from '../apis/purchases.api.js';
import { reduceStockAPI } from '../apis/reduce.api.js';
import creditCard from '../assets/credit-card.png';
import kakaoPay from '../assets/kakao-pay.png';
import tossPay from '../assets/toss-pay.png';
import * as Payment from './PaymentPage.style';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState('credit-card');
  const [pgProvider, setPgProvider] = useState('html5_inicis');
  const [inputPoints, setInputPoints] = useState(0);
  const [usedPoints, setUsedPoints] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const { data: pointData, isPending: pointIsPending } = useGetPoint();

  useEffect(() => {
    if (cart.length > 0) {
      const amount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalAmount(amount);
      setFinalAmount(amount);
    }
  }, [cart]);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (!window.IMP) {
      const script = document.createElement('script');
      script.src = 'https://cdn.iamport.kr/v1/iamport.js';
      script.async = true;
      script.onload = () => console.log('포트원 SDK 로드 완료');
      document.body.appendChild(script);
    }
  }, []);

  const handleUsePoints = () => {
    const validPoints = Math.min(inputPoints, pointData, totalAmount);

    setUsedPoints(validPoints);
    setInputPoints(validPoints);
    setFinalAmount(totalAmount - validPoints);
  };

  const handlePayment = () => {
    const IMP = window.IMP;
    IMP.init('imp17808248');

    const merchantUid = `mid_${new Date().getTime()}`;
    const token = sessionStorage.getItem('token');

    if (!token) {
      alert('로그인 정보가 없습니다. 다시 로그인해주세요.');
      navigate('/login');
      return;
    }

    const paymentData = {
      pg: pgProvider,
      pay_method: selectedPayment,
      merchant_uid: merchantUid,
      name: '주문 상품',
      amount: finalAmount,
      buyer_email: 'test@example.com',
      buyer_name: '테스터',
      buyer_tel: '010-1234-5678',
      buyer_addr: '서울특별시 강남구',
      buyer_postcode: '123-456',
      m_redirect_url: 'https://d3lz1uigms4ul3.cloudfront.net/mypage',
    };

    IMP.request_pay(paymentData, async (response) => {
      if (response.success) {
        try {
          const purchaseData = {
            impUid: response.imp_uid,
            merchantUid,
            date: new Date().toISOString(),
            totalAmount: finalAmount,
            paymentMethod: selectedPayment,
            pgProvider,
            usedPoints: usedPoints,
            status: 'SUCCESS',
            items: cart.map((item) => ({
              foodId: item.foodId ?? null,
              foodName: item.foodName ?? '상품명 없음',
              quantity: item.quantity,
              price: item.price,
            })),
          };

          await purchaseAPI(purchaseData);
          await reduceStockAPI(cart, token);

          alert('결제 성공 및 재고 감소 완료!');
          navigate('/mypage', { state: { merchantUid, cart } });
        } catch (error) {
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
    <Payment.Page>
      <Payment.SubTitle>선택한 상품</Payment.SubTitle>
      {cart.length > 0 ? (
        <Payment.WhiteBox>
          {cart.map((item, index) => (
            <Payment.Wrapper key={index}>
              <Payment.TotalText>
                {item.foodName} x{item.quantity}개
              </Payment.TotalText>
            </Payment.Wrapper>
          ))}
          <Payment.WrapperWithBorder></Payment.WrapperWithBorder>
          <Payment.Wrapper>
            <Payment.TotalText>총 수량 :{totalQuantity}개</Payment.TotalText>
            <Payment.TotalText>{totalAmount}원</Payment.TotalText>
          </Payment.Wrapper>
        </Payment.WhiteBox>
      ) : (
        <Payment.WhiteBox>
          <Payment.TotalText>장바구니가 비어 있습니다.</Payment.TotalText>
        </Payment.WhiteBox>
      )}

      <Payment.SubTitle>포인트 사용</Payment.SubTitle>
      <Payment.WhiteBox>
        <Payment.Wrapper>
          <Payment.TotalText>현재 내 포인트: </Payment.TotalText>
          {pointIsPending ? (
            <Spinner />
          ) : (
            <Payment.TotalText>
              {pointData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              point
            </Payment.TotalText>
          )}

          <Payment.PointButton onClick={() => navigate('/mypage/point')}>
            충전하기
          </Payment.PointButton>
        </Payment.Wrapper>
        <Payment.Wrapper>
          <Payment.TotalText>사용할 포인트: </Payment.TotalText>
          <Payment.TotalText>
            <Payment.PointInput
              type='number'
              min='0'
              max={Math.min(pointData, totalAmount)}
              value={inputPoints}
              onChange={(e) => setInputPoints(Number(e.target.value))}
            />
            point
          </Payment.TotalText>
          <Payment.PointButton onClick={handleUsePoints}>
            사용
          </Payment.PointButton>
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
          <Payment.TotalText> {usedPoints} point</Payment.TotalText>
        </Payment.Wrapper>
        <Payment.WrapperWithBorder>
          <Payment.Wrapper>
            <Payment.TotalText>총 결제 금액</Payment.TotalText>
            <Payment.TotalText>{finalAmount} 원 </Payment.TotalText>
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
    </Payment.Page>
  );
};

export default PaymentPage;
