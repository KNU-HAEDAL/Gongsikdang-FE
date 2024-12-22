import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as Gongsikdang from './GongsikdangPage.style';
import * as Common from '@/shared/styles';

const GongsikdangPage = () => {
  const [menuItems, setMenuItems] = useState({ a: [], b: [], c: [], d: [] });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get('/menu', {
          params: { restaurantName: '공식당' },
        });

        const menuData = { a: [], b: [], c: [], d: [] };

        response.data.forEach((item) => {
          if (item.sector === 'A') menuData.a.push(item);
          if (item.sector === 'B') menuData.b.push(item);
          if (item.sector === 'C') menuData.c.push(item);
          if (item.sector === 'D') menuData.d.push(item);
        });

        setMenuItems(menuData);
      } catch (error) {
        setError('Failed to fetch menu items');
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <Gongsikdang.GongSikDangPageLayout>
      {/* 상단 버튼 영역 */}
      <Common.TopButtons>
        {/* 뒤로 버튼 */}
        <Common.TopButton
          onClick={() => navigate(-1)} // 이전 페이지로 이동
        >
          뒤로
        </Common.TopButton>

        {/* 홈 버튼 */}
        <Common.TopButton
          onClick={() => navigate('/chooseRestaurant')} // ChooseRestaurant.js로 이동
        >
          홈
        </Common.TopButton>
      </Common.TopButtons>
      <Gongsikdang.Title>코너 선택</Gongsikdang.Title>
      {error && <Gongsikdang.Error>{error}</Gongsikdang.Error>}

      {/* 코너 메뉴 */}
      <Gongsikdang.Grid>
        <Gongsikdang.Row>
          <Gongsikdang.Zone>
            <Gongsikdang.ZoneName>A 코너</Gongsikdang.ZoneName>
            <Gongsikdang.Menu>
              {menuItems.a.map((item, index) => (
                <Gongsikdang.MenuLine key={index}>
                  <Gongsikdang.MenuName>{item.name}</Gongsikdang.MenuName>
                </Gongsikdang.MenuLine>
              ))}
            </Gongsikdang.Menu>
          </Gongsikdang.Zone>
          <Gongsikdang.Zone>
            <Gongsikdang.ZoneName>B 코너</Gongsikdang.ZoneName>
            <Gongsikdang.Menu>
              {menuItems.b.map((item, index) => (
                <Gongsikdang.MenuLine key={index}>
                  <Gongsikdang.MenuName>{item.name}</Gongsikdang.MenuName>
                </Gongsikdang.MenuLine>
              ))}
            </Gongsikdang.Menu>
          </Gongsikdang.Zone>
        </Gongsikdang.Row>
        <Gongsikdang.Row>
          <Gongsikdang.Zone>
            <Gongsikdang.ZoneName>C 코너</Gongsikdang.ZoneName>
            <Gongsikdang.Menu>
              {menuItems.c.map((item, index) => (
                <Gongsikdang.MenuLine key={index}>
                  <Gongsikdang.MenuName>{item.name}</Gongsikdang.MenuName>
                </Gongsikdang.MenuLine>
              ))}
            </Gongsikdang.Menu>
          </Gongsikdang.Zone>
          <Gongsikdang.Zone>
            <Gongsikdang.ZoneName>D 코너</Gongsikdang.ZoneName>
            <Gongsikdang.Menu>
              {menuItems.d.map((item, index) => (
                <Gongsikdang.MenuLine key={index}>
                  <Gongsikdang.MenuName>{item.name}</Gongsikdang.MenuName>
                </Gongsikdang.MenuLine>
              ))}
            </Gongsikdang.Menu>
          </Gongsikdang.Zone>
        </Gongsikdang.Row>
      </Gongsikdang.Grid>

      {/* 하단 버튼 */}
      <Gongsikdang.BottomButtons>
        <Gongsikdang.BottomButton to='/a-details'>A</Gongsikdang.BottomButton>
        <Gongsikdang.BottomButton to='/b-details'>B</Gongsikdang.BottomButton>
        <Gongsikdang.BottomButton to='/c-details'>C</Gongsikdang.BottomButton>
        <Gongsikdang.BottomButton to='/d-details'>D</Gongsikdang.BottomButton>
      </Gongsikdang.BottomButtons>
    </Gongsikdang.GongSikDangPageLayout>
  );
};

export default GongsikdangPage;
