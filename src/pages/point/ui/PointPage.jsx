import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CheckIcon from '@/pages/_assets/icons/CheckIcon.jsx';
import { purchaseAPI } from '@/pages/payment/apis/purchases.api';

import { chargePointAPI } from '../apis/point-charge.api';
import creditCard from '../assets/credit-card.png';
import kakaoPay from '../assets/kakao-pay.png';
import tossPay from '../assets/toss-pay.png';
import * as Point from './PointPage.style';

const PointPage = () => {
  const navigate = useNavigate();
  const [selectedPoint, setSelectedPoint] = useState(50000);
  const [currentPoints, setCurrentPoints] = useState(100000);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [pgProvider, setPgProvider] = useState('html5_inicis');
  const [isIMPReady, setIsIMPReady] = useState(false);

  useEffect(() => {
    if (!window.IMP) {
      const script = document.createElement('script');
      script.src = 'https://cdn.iamport.kr/v1/iamport.js';
      script.async = true;
      script.onload = () => setIsIMPReady(true);
      document.body.appendChild(script);
    } else {
      setIsIMPReady(true);
    }
  }, []);

  const handlePointSelect = (points) => {
    setSelectedPoint(points);
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    if (method === 'credit-card') {
      setPgProvider('html5_inicis');
    } else if (method === 'kakaopay') {
      setPgProvider('kakaopay');
    } else if (method === 'tosspay') {
      setPgProvider('tosspay');
    }
  };

  const handleCharge = async () => {
    if (!isIMPReady) {
      alert('아임포트 SDK 로드 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const IMP = window.IMP;
    IMP.init('imp17808248');

    const merchantUid = `mid_${new Date().getTime()}`;

    const paymentData = {
      pg: pgProvider,
      pay_method: paymentMethod,
      merchant_uid: merchantUid,
      name: '포인트 충전',
      amount: selectedPoint, // 충전할 포인트 금액
      buyer_email: 'test@example.com',
      buyer_name: '테스터',
      buyer_tel: '010-1234-5678',
      buyer_addr: '서울특별시 강남구',
      buyer_postcode: '123-456',
    };

    IMP.request_pay(paymentData, async (response) => {
      console.log('Payment Response:', response); // 결제 응답 확인
      if (response.success) {
        try {
          const chargeData = {
            impUid: response.imp_uid,
            money: selectedPoint, // 결제된 금액
          };
          const result = await chargePointAPI(chargeData);
          console.log('Charge API Response:', result); // 충전 API 응답 확인

          setCurrentPoints((prevPoints) => prevPoints + selectedPoint); // 포인트 업데이트

          alert('포인트 충전 성공!');
          navigate('/mypage');
        } catch (error) {
          alert('포인트 충전 중 오류가 발생했습니다.');
        }
      } else {
        alert(
          `결제 실패: ${response.error_msg || '알 수 없는 오류가 발생했습니다.'}`
        );
      }
    });
  };

  return (
    <Point.Layout>
      <Point.WhiteBox>
        <Point.SubTitle>포인트 충전 주의사항</Point.SubTitle>
        <Point.Text>
          포인트의 유효기간은 <Point.BoldRed>6개월</Point.BoldRed>
          입니다.
        </Point.Text>
        <Point.Text>
          {' '}
          <Point.BoldRed>6개월 이후</Point.BoldRed>
          포인트는 <Point.BoldRed>자동 소멸</Point.BoldRed>
          됩니다.
        </Point.Text>
      </Point.WhiteBox>
      <Point.WhiteBox>
        <Point.SubTitle>충전 금액 선택</Point.SubTitle>
        <Point.Text>
          <CheckIcon color=' #00FF00' /> 5만 포인트 충전 시 5% 추가적립
        </Point.Text>
        <Point.Text>
          <CheckIcon color=' #00FF00' /> 10만 포인트 충전 시 10% 추가적립
        </Point.Text>
      </Point.WhiteBox>
      <Point.Section>
        <Point.PointOptions>
          <Point.PointButton
            className={selectedPoint === 50000 ? 'selected' : ''}
            onClick={() => handlePointSelect(50000)}
          >
            50,000 point
          </Point.PointButton>
          <Point.PointButton
            className={selectedPoint === 100000 ? 'selected' : ''}
            onClick={() => handlePointSelect(100000)}
          >
            100,000 point
          </Point.PointButton>
        </Point.PointOptions>
      </Point.Section>
      <Point.Section>
        <Point.SubTitle>결제 수단</Point.SubTitle>
        <Point.PaymentMethods>
          <Point.PaymentMethod
            className={paymentMethod === 'credit-card' ? 'selected' : ''}
            onClick={() => handlePaymentMethodSelect('credit-card')}
          >
            <Point.Image src={creditCard} />
          </Point.PaymentMethod>
          <Point.PaymentMethod
            className={paymentMethod === 'kakaopay' ? 'selected' : ''}
            onClick={() => handlePaymentMethodSelect('kakaopay')}
          >
            <Point.Image src={kakaoPay} />
          </Point.PaymentMethod>
          <Point.PaymentMethod
            className={paymentMethod === 'tosspay' ? 'selected' : ''}
            onClick={() => handlePaymentMethodSelect('tosspay')}
          >
            <Point.Image src={tossPay} />
          </Point.PaymentMethod>
        </Point.PaymentMethods>
      </Point.Section>
      <Point.Section>
        <Point.SubTitle>충전 예상 금액</Point.SubTitle>
        <Point.EstimatedAmount>
          {selectedPoint + (selectedPoint === 50000 ? 2500 : 10000)} point
        </Point.EstimatedAmount>
      </Point.Section>
      <Point.ChargeButton onClick={handleCharge}>충전하기</Point.ChargeButton>
    </Point.Layout>
  );
};

export default PointPage;
