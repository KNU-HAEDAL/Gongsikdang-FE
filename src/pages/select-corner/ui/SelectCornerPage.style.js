import styled from '@emotion/styled';

/* 전체 배경 */
export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffe0e0;
`;

/* 페이지 레이아웃 */
export const PageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 720px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

/* 헤더 */
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 0px;
  width: 390px;
  height: 60px;
  border-radius: 15px;
  padding: 12px 10px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #e10707;
  font-weight: 700;
  line-height: 28.64px;
`;

export const ProfileButton = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

/* 부제목 */
export const Subtitle = styled.p`
  width: 336px;
  height: 24px;
  top: 87px;
  left: 27px;
  font-size: 19px;
  font-weight: 600;
  line-height: 23.87px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #000000;
`;

/* 그리드 레이아웃 */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-grow: 1;
  width: 370px;
  height: 487px;
  top: 138px;
  left: 10px;
  padding-top: 11px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 11px;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 70px;
`;

/* 코너 카드 */
export const CornerCard = styled.div`
  width: 160px;
  height: 223px;
  border-radius: 10px;
  border-width: 1px;
  background: #fff;
  border: 1px solid #c2c2c2;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28.67px;
    color: #e10707;
    margin-bottom: 20px;
    width: 116;
    height: 37;
    top: 12px;
    left: 22px;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    background: #ffffff;
    width: 113;
    height: 126;
    top: 59px;
    left: 23px;
    line-height: 19.09px;
    justify-content: space-between;
    align-items: center;
  }

  li {
    margin-bottom: 20px;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
  }
`;

/*뒤로가기 아이콘 디자인*/
export const BackArrowIcon = styled.svg`
  width: 18.83px;
  height: 18.83px;
  color: #ffffff;
  fill: currentColor;
`;
