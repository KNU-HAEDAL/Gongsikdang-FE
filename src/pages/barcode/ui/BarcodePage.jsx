import QRCode from 'react-qr-code';
import { useLocation } from 'react-router-dom';

import * as Styled from './BarcodePage.style.js';

const BarcodePage = () => {
  const location = useLocation();
  const { foodName, merchantUid } = location.state || {};

  return (
    <Styled.PageLayout>
      <Styled.FoodTitle>{foodName || '상품명 없음'}</Styled.FoodTitle>

      <Styled.Message>
        <p>바코드 사용 후&nbsp;</p>
        <Styled.Highlight>구매 확정</Styled.Highlight>
        <p>을 꼭 해주세요!</p>
      </Styled.Message>

      <Styled.BarcodeContainer>
        {merchantUid ? (
          <QRCode value={merchantUid} size={200} /> // 주문번호를 QR 코드 값으로 설정
        ) : (
          <Styled.NoQRMessage>QR 코드 없음</Styled.NoQRMessage>
        )}
      </Styled.BarcodeContainer>
    </Styled.PageLayout>
  );
};

export default BarcodePage;
