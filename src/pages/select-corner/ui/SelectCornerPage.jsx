import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { Header } from '@/shared/index.js';

import * as Styled from './SelectCornerPage.style.js';

const SelectCornerPage = () => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const token = localStorage.getItem('jwtToken'); // ✅ JWT 토큰 가져오기

        console.log('현재 사용 중인 JWT 토큰:', token);

        if (!token) {
          console.error('JWT 토큰이 없음! 먼저 로그인하세요.');
          return;
        }

        const response = await axios.get(
          'https://gongsikdang-be-production.up.railway.app/api/menu',
          {
            headers: {
              Authorization: `Bearer ${token.trim()}`, // ✅ JWT 토큰 추가
              Accept: 'application/json',
            },
          }
        );

        if (response.status === 200) {
          setMenuData(response.data);
        } else {
          console.error('메뉴 데이터를 불러오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('메뉴 불러오기 오류:', error);
      }
    };

    fetchMenu();
  }, []);

  // 코너별 메뉴 분류
  const menuByCorner = {
    A: [],
    B: [],
    C: [],
    D: [],
  };

  menuData.forEach((menu) => {
    if (menu.sector in menuByCorner) {
      menuByCorner[menu.sector].push(menu.foodName);
    }
  });

  return (
    <Styled.Background>
      <Styled.PageLayout>
        <Header title='코너 선택' />
        <Styled.Subtitle>
          구매하고 싶은 식권의 코너를 선택해주세요.
        </Styled.Subtitle>
        <Styled.Grid>
          {Object.entries(menuByCorner).map(([corner, menuList]) => (
            <Styled.CornerCard
              key={corner}
              onClick={() => navigate(`/corner/${corner}`)}
            >
              <h2>{corner} 코너</h2>
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
    </Styled.Background>
  );
};

export default SelectCornerPage;
