import styled from '@emotion/styled';

export const ChooseRestaurantLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* 여백 */
`;

export const ChooseRestaurantContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  text-align: center;
`;

export const ChooseRestaurantTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
`;

export const RestaurantList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const RestaurantBox = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f1f1f1;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const RestaurantTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`;

export const MypageBox = styled.div`
  padding: 18px 25px; /* 버튼 크기 증가 */
  background-color: #e10707;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.2s;
  font-size: 1em; /* 약간 더 큰 글씨 */
  display: flex;
  align-items: center; /* 아이콘과 텍스트 정렬 */
  gap: 10px; /* 아이콘과 텍스트 간격 */
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 15px; /* 버튼 크기 약간 증가 */
  background-color: #e10707;
  color: white;
  border: none;
  border-radius: 10px; /* 둥글기 수정 */
  font-size: 1em;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.2s;
  margin-top: 20px; /* 마이페이지 박스와의 간격 */

  :hover {
    background-color: #e10707;
    transform: translateY(-3px);
  }
`;
