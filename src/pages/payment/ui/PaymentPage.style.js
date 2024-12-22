import styled from '@emotion/styled';

export const PaymentPageLayout = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  text-align: center;
`;

export const WhiteBox = styled.div`
  background-color: #fff;
  border: 1px solid lightgray;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%; /* 가로 길이를 컨테이너 전체에 맞춤 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
  text-align: left; /* 텍스트 정렬을 왼쪽으로 */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px 0;
`;

export const MethodBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--lightGray); /* 기본 배경색 */
  border: 1px solid #e0e0e0; /* 기본 테두리 */
  border-radius: 8px;
  padding: 15px;
  height: 120px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s; /* 자연스러운 전환 효과 */
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const SubTitle = styled.h2`
  margin: 20px 0 10px;
  font-size: 20px;
  color: #e74c3c;
`;

export const TotalText = styled.p`
  color: black;
  font-size: 16px;
  margin: 5px 0;
`;

export const MethodText = styled.p`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #e74c3c;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition:
    background 0.3s,
    transform 0.2s;

  :hover {
    background: #c0392b;
    transform: scale(1.02);
  }
`;
