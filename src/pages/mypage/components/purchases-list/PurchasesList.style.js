import styled from '@emotion/styled';

export const PurchaseBox = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid var(--gray);
  border-radius: 10px;
`;
export const InfoText = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  .red {
    color: red;
  }
`;

export const PurchaseList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const PurchaseCard = styled.div`
  width: 100%;
  height: 230px;
  border: 1px solid var(--gray);
  border-radius: 8px;
  background-color: #fff;
  padding: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const PurchaseTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const PurchaseDate = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const QRCodeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QRCode = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  margin: 5px 0;
  border-radius: 5px;
`;
export const QRText = styled.div`
  font-size: 14px;
  color: ${({ isFirstCase }) =>
    isFirstCase ? '#000000' : 'rgb(139, 133, 133)'};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${({ isFirstCase }) => (isFirstCase ? '#333' : '#888')};
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
`;

export const StatusText = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
`;
export const ReviewButton = styled.button`
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const ActionButton = styled.button`
  min-width: 60px;
  height: 35px;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
