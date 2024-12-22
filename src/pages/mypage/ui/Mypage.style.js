import styled from '@emotion/styled';

export const MypageLayout = styled.div`
  width: var(--page-width);
  max-width: 100%;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* 더 부드러운 그림자 */
  margin: 20px auto;
`;

export const MypageTitle = styled.h1`
  color: var(--red);
  text-align: center;
  font-size: var(--font-lg); /* 더 큰 제목 */
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 1.5px; /* 제목에 여유 추가 */
`;

export const MypageSubTitle = styled.h3`
  margin: 0;
  font-size: var(--font-md);
  color: var(--black);
  font-weight: bold;
`;

export const PurchaseHistory = styled.section`
  margin-top: 20px;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const PurchaseHistoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-sm);
  color: var(--gray);

  :hover {
    cursor: pointer;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-color: var(--red);
  }
`;

export const PurchaseHistoryItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-color: var(--red);
  }
`;
