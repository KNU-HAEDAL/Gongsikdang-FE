import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import * as Styled from './SelectCornerPage.style.js';

const SelectCornerPage = () => {
  const navigate = useNavigate();
  const [menuListData, setMenuListData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          throw new Error('JWT 토큰이 없습니다. 로그인 후 다시 시도하세요.');
        }

        const response = await axios.get(
          'https://gongsikdang-be-production.up.railway.app/api/menu',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        );

        setMenuListData(response.data);
      } catch (error) {
        console.error('메뉴 데이터 불러오기 오류:', error);
        setIsError(true);
      }
    };

    fetchMenuData();
  }, []); //

  const menuByCorner =
    menuListData?.reduce((acc, menu) => {
      if (!acc[menu.sector]) {
        acc[menu.sector] = [];
      }
      acc[menu.sector].push(menu.foodName);
      return acc;
    }, {}) || {};

  if (isError) {
    return (
      <Styled.ErrorMessage>데이터를 불러올 수 없습니다.</Styled.ErrorMessage>
    );
  }

  return (
    <Styled.PageLayout>
      <Styled.Subtitle>
        구매하고 싶은 식권의 코너를 선택해주세요.
      </Styled.Subtitle>

      {isError && (
        <Styled.ErrorMessage>데이터를 불러올 수 없습니다.</Styled.ErrorMessage>
      )}

      <Styled.Grid>
        {Object.entries(menuByCorner).map(([corner, menuList]) => (
          <Styled.CornerCard
            key={corner}
            onClick={() => navigate(`/corner/${corner}`)}
          >
            <h2>
              {corner}
              &nbsp;코너
            </h2>
            <ul>
              {menuList.length > 0 ? (
                menuList.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>메뉴 없음</li>
              )}
            </ul>
          </Styled.CornerCard>
        ))}
      </Styled.Grid>
    </Styled.PageLayout>
  );
};

export default SelectCornerPage;
