import { Link, useNavigate } from 'react-router-dom';

import * as ChooseRestaurant from './ChooseRestaurant.style';

const ChooseRestaurantPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token'); // 세션 토큰 삭제
    alert('로그아웃 되었습니다.');
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <ChooseRestaurant.ChooseRestaurantLayout>
      <ChooseRestaurant.ChooseRestaurantContainer>
        <ChooseRestaurant.ChooseRestaurantTitle>
          식당 선택
        </ChooseRestaurant.ChooseRestaurantTitle>

        <ChooseRestaurant.RestaurantList>
          {/* 공식당 */}
          <Link to='/gongsikdang' className='restaurant'>
            <ChooseRestaurant.RestaurantBox
              className='official-dang'
              id='official-dang'
            >
              <ChooseRestaurant.RestaurantTitle>
                공식당
              </ChooseRestaurant.RestaurantTitle>
            </ChooseRestaurant.RestaurantBox>
          </Link>

          {/* 카페테리아 첨성 */}
          <Link to='/cafeteria' className='restaurant'>
            <ChooseRestaurant.RestaurantBox className='cafeteria-chumseong'>
              <ChooseRestaurant.RestaurantTitle>
                카페테리아 첨성
              </ChooseRestaurant.RestaurantTitle>
            </ChooseRestaurant.RestaurantBox>
          </Link>

          {/* 정보센터식당 */}
          <Link to='/infoRestaurant' className='restaurant'>
            <ChooseRestaurant.RestaurantBox className='restaurant-box infocenter-restaurant'>
              <ChooseRestaurant.RestaurantTitle>
                정보센터식당
              </ChooseRestaurant.RestaurantTitle>
            </ChooseRestaurant.RestaurantBox>
          </Link>
        </ChooseRestaurant.RestaurantList>

        {/* 마이페이지 */}
        <div className='mypage'>
          <Link to='/mypage'>
            <ChooseRestaurant.MypageBox>
              <ChooseRestaurant.RestaurantTitle>
                마이페이지
              </ChooseRestaurant.RestaurantTitle>
            </ChooseRestaurant.MypageBox>
          </Link>
        </div>

        {/* 로그아웃 버튼 */}
        <div className='logout'>
          <ChooseRestaurant.LogoutButton onClick={handleLogout}>
            로그아웃
          </ChooseRestaurant.LogoutButton>
        </div>
      </ChooseRestaurant.ChooseRestaurantContainer>
    </ChooseRestaurant.ChooseRestaurantLayout>
  );
};

export default ChooseRestaurantPage;
