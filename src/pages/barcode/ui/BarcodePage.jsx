import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@/shared/index.js';

import * as Styled from './BarcodePage.style.js';

const BarcodePage = () => {
  const navigate = useNavigate();

  // 임시 데이터
  const menuName = '육회비빔밥'; // 메뉴 이름

  const handlePurchaseConfirmation = () => {
    alert('구매가 확인되었습니다!');
    navigate('/'); // 홈으로 이동 예시
  };

  return (
    <Styled.Background>
      <Styled.PageLayout>
        {/* Header 컴포넌트 */}
        <Header title='바코드 확인' />

        {/* 메뉴 이름 */}
        <Styled.FoodTitle>{menuName}</Styled.FoodTitle>

        {/* 안내 문구 */}
        <Styled.Message>
          바코드 사용 후 <Styled.Highlight>구매 확정</Styled.Highlight>을 꼭
          해주세요!
        </Styled.Message>

        {/* 바코드 자리 */}
        <Styled.BarcodeContainer>
          {/* 바코드 이미지는 비워둠 */}
          <Styled.BarcodePlaceholder />
        </Styled.BarcodeContainer>

        {/* 구매 확정 버튼 */}
        <Styled.Button onClick={handlePurchaseConfirmation}>
          구매 확정
        </Styled.Button>
      </Styled.PageLayout>
    </Styled.Background>
  );
};

export default BarcodePage;
