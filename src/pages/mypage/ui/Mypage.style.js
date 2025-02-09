import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffe0e0;
`;

export const Layout = styled.div`
  width: 390px;
  height: 1069px;
  top: 1332px;
  left: 602px;
  border-radius: 20px;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  padding: 10px;
  text-align: center;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 20px;
  line-height: 23.87px;
  letter-spacing: 0%;
  margin: 5px 0;
`;

export const InfoBox = styled.div`
  width: 337px;
  height: 110px
  top: 113px;
  left: 28px;
  border-radius: 10px;
  border-width: 1px;
  background-color: #fff;
  border: 1px solid lightgray;
  padding: 15px;
  margin: auto;
  margin-top: 10px;
 
  radius: 10px;
  box-sizing: border-box;
  text-align: left;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const UserText = styled.span`
  font-size: 16px;
`;

export const BoldText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
export const RedButton = styled.button`
  width: 76px;
  height: 29px;
  top: 13px;
  left: 246px;
  border-radius: 5px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: #e10707;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #c30606;
  }
`;

export const PointBox = styled(InfoBox)`
  width: 337px;
  height: 55px;
  top: 257px;
  left: 26px;
  border-radius: 10px;
  border-width: 1px;

  background-color: #fff;
  border: 1px solid lightgray;
  padding: 15px;
  margin: auto;
  margin-top: 10px;

  radius: 10px;
  box-sizing: border-box;
  text-align: left;
`;

export const PointText = styled.span`
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  color:background: #000000;
  margin-bottom: 15px;
`;

export const BoldRed = styled.span`
  color: red;
  font-size: 16px;
  margin: 5px;
  text-align: center;
  font-weight: bold;
`;
export const PurchaseBox = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const PurchaseList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 90%; /* 부모 요소에 맞게 크기 설정 */
  max-width: 400px; /* 최대 너비 제한 */
  margin: 0 auto; /* 중앙 정렬 */
`;

export const PurchaseCard = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

export const PurchaseTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PurchaseDate = styled.p`
  font-size: 12px;
  color: #555;
`;

export const QRCode = styled.div`
  width: 60px;
  height: 60px;
  background-color: #f0f0f0;
  margin: 0 auto;
  border-radius: 5px;
`;

export const QRText = styled.div`
  font-size: 14px;
  color: ${({ isFirstCase }) =>
    isFirstCase ? ' #000000' : 'rgb(139, 133, 133);'};
`;

export const Status = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #555;
  margin: 0;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

export const ActionButton = styled.button`
  width: auto;
  min-width: 80px;
  height: 35px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: ${({ disabled, color }) =>
    disabled
      ? '#d3d3d3'
      : color === 'blue'
        ? '#007bff'
        : color === 'red'
          ? '#e10707'
          : '#d3d3d3'};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled, color }) =>
      disabled
        ? '#d3d3d3'
        : color === 'blue'
          ? '#0056b3'
          : color === 'red'
            ? '#c30606'
            : '#bfbfbf'};
  }
`;
