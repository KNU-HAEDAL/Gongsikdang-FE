import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CheckIcon from '@/pages/_assets/icons/CheckIcon.jsx';

import { Header } from '@/shared/index.js';
import { fetchInstance } from '@/shared/instance/Instance';
import * as Common from '@/shared/styles';

import creditCard from '../assets/credit-card.png';
import kakaoPay from '../assets/kakao-pay.png';
import tossPay from '../assets/toss-pay.png';
import * as Point from './PointPage.style';

const PointPage = () => {
  const [selectedPoint, setSelectedPoint] = useState(50000);
  const [currentPoints, setCurrentPoints] = useState(100000);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handlePointSelect = (points) => {
    setSelectedPoint(points);
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  const handleCharge = () => {
    alert(`충전 완료! ${selectedPoint} 포인트 충전되었습니다.`);
    setCurrentPoints(currentPoints + selectedPoint);
  };

  return (
    <Point.Background>
      <Point.Container>
        <Header title='포인트 충전' />
        <Point.WhiteBox>
          <Point.SubTitle>포인트 충전 주의사항</Point.SubTitle>
          <Point.Text>
            포인트의 유효기간은 <Point.BoldRed>6개월</Point.BoldRed>입니다.
          </Point.Text>
          <Point.Text>
            {' '}
            <Point.BoldRed>6개월 이후</Point.BoldRed>포인트는{' '}
            <Point.BoldRed>자동 소멸</Point.BoldRed>됩니다.{' '}
          </Point.Text>
        </Point.WhiteBox>
        <Point.WhiteBox>
          <Point.SubTitle>충전 금액 선택</Point.SubTitle>
          <Point.Text>
            {' '}
            <CheckIcon color=' #00FF00' /> 5만 포인트 충전 시 5% 추가적립{' '}
          </Point.Text>
          <Point.Text>
            {' '}
            <CheckIcon color=' #00FF00' /> 10만 포인트 충전 시 10% 추가적립{' '}
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
      </Point.Container>
    </Point.Background>
  );
};

export default PointPage;
