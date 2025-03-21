import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadingView, Spinner } from '@/shared/index.js';

import { menuListAPI } from '../apis';
import { useGetMenuList } from '../hooks';
import * as Styled from './SelectCornerPage.style.js';

const SelectCornerPage = () => {
  const navigate = useNavigate();
  const [menuListData, setMenuListData] = useState([]);
  const [isError, setIsError] = useState(false);

  const { data: menuData, isPending } = useGetMenuList();

  const menuByCorner =
    menuData?.reduce((acc, menu) => {
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

  if (isPending) {
    return <LoadingView />;
  }

  return (
    <Styled.PageLayout>
      <Styled.Subtitle>
        구매하고 싶은 식권의 코너를 선택해주세요.
      </Styled.Subtitle>

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
