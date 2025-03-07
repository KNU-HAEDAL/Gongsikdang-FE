import { useNavigate } from 'react-router-dom';

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
    <Styled.PageLayout>
      {/* 메뉴 이름 */}
      <Styled.FoodTitle>{menuName}</Styled.FoodTitle>

      {/* 안내 문구 */}
      <Styled.Message>
        <p>바코드 사용 후&nbsp;</p>
        <Styled.Highlight>구매 확정</Styled.Highlight>
        <p>을 꼭 해주세요!</p>
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
  );
};

export default BarcodePage;
