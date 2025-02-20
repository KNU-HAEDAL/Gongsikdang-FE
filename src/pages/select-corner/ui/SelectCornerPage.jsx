import { useNavigate } from 'react-router-dom';

import { LoadingView } from '@/shared';

import { useGetMenuList } from '../hooks/useGetMenuList.js';
import * as Styled from './SelectCornerPage.style.js';

const SelectCornerPage = () => {
  const navigate = useNavigate();

  const { data: menuListData, isError, isPending } = useGetMenuList();

  if (isPending) return <LoadingView />;

  const menuByCorner =
    menuListData?.data?.reduce((acc, menu) => {
      if (!acc[menu.sector]) {
        acc[menu.sector] = [];
      }
      acc[menu.sector].push(menu.foodName);
      return acc;
    }, {}) || {};

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
