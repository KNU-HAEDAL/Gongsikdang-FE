import { useNavigate } from 'react-router-dom';

import * as Styled from './BarcodePage.style.js';

const BarcodePage = () => {
  const navigate = useNavigate();

  const menuName = '육회비빔밥';

  return (
    <Styled.PageLayout>
      <Styled.FoodTitle>{menuName}</Styled.FoodTitle>

      <Styled.Message>
        <p>바코드 사용 후&nbsp;</p>
        <Styled.Highlight>구매 확정</Styled.Highlight>
        <p>을 꼭 해주세요!</p>
      </Styled.Message>

      <Styled.BarcodeContainer>
        <Styled.BarcodePlaceholder />
      </Styled.BarcodeContainer>
    </Styled.PageLayout>
  );
};

export default BarcodePage;
