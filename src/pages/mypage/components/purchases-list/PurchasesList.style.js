import styled from '@emotion/styled';

export const PurchaseBox = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid var(--gray);
  border-radius: 10px;
`;

export const PurchaseList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%; /* 부모 요소에 맞게 크기 설정 */
  max-width: 400px; /* 최대 너비 제한 */
  margin: 0 auto; /* 중앙 정렬 */
`;

export const PurchaseCard = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid var(gray);
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

export const PurchaseUndefined = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
`;
