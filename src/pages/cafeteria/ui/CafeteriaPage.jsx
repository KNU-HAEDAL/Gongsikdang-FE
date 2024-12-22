import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Cafeteria from './CafeteriaPage.style';
import { fetchInstance } from '@/shared/instance/Instance';
import * as Common from '@/shared/styles';

const CafeteriaPage = () => {
  const [menuItems, setMenuItems] = useState([]); // 메뉴 데이터
  const [cart, setCart] = useState([]); // 장바구니 데이터
  const [error, setError] = useState(null); // 에러 처리
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetchInstance.get('/menu/cafe', {
          params: { restaurantName: '카페테리아 첨성' },
        });
        const updatedMenu = response.data.map((item) => ({
          ...item,
          name: item.name.trim(), // 공백 제거
          price: Number(item.price), // price를 숫자로 변환
          quantity: 1, // 기본 수량 초기화
        }));
        setMenuItems(updatedMenu);
      } catch (error) {
        setError('Failed to fetch menu items');
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item }]);
    }

    // 장바구니에 추가 후 메뉴 수량 초기화
    setMenuItems(
      menuItems.map((menuItem) =>
        menuItem.name === item.name ? { ...menuItem, quantity: 1 } : menuItem
      )
    );
  };

  const handleQuantityChange = (item, delta) => {
    setMenuItems(
      menuItems.map((menuItem) =>
        menuItem.name === item.name
          ? {
              ...menuItem,
              quantity: Math.max(1, (menuItem.quantity || 1) + delta),
            }
          : menuItem
      )
    );
  };

  const handleRemoveFromCart = (itemName) => {
    setCart(cart.filter((cartItem) => cartItem.name !== itemName));
  };

  const navigateToPayment = () => {
    navigate('/payment', { state: { cart: cart } });
  };

  return (
    <Cafeteria.CafeteriaLayout>
      <Cafeteria.RestaurantContainer>
        {/* 상단 버튼 영역 */}
        <Common.TopButtons className='top-buttons'>
          {/* 뒤로 버튼 */}
          <Common.TopButton
            className='top-button back-button'
            onClick={() => navigate(-1)} // 이전 페이지로 이동
          >
            뒤로
          </Common.TopButton>

          {/* 홈 버튼 */}
          <Common.TopButton
            className='top-button home-button'
            onClick={() => navigate('/chooseRestaurant')} // ChooseRestaurant.js로 이동
          >
            홈
          </Common.TopButton>
        </Common.TopButtons>
        <Cafeteria.CafeteriaTitle>
          카페테리아 첨성 메뉴
        </Cafeteria.CafeteriaTitle>
        {error && <p className='error'>{error}</p>}
        <Cafeteria.MenuList>
          {menuItems.map((item, index) => (
            <Cafeteria.MenuItem key={index}>
              {/* 메뉴 이미지 */}
              <Cafeteria.MenuItemImage
                src={`/images3/${item.name.replace(/\s/g, '')}.jpg`}
                alt={item.name}
                className='menu-item-image'
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                onError={(e) => (e.target.src = '/images3/default.jpg')} // 기본 이미지
              />
              {/* 메뉴 이름 */}
              <h3 className='menu-item-name'>{item.name}</h3>
              <div className='menu-item-details'>
                <Cafeteria.MenuItemDetails>
                  가격: {item.price}원
                </Cafeteria.MenuItemDetails>
                {/* 남은 수량 표시 */}
                <Cafeteria.MenuItemDetails>
                  남은 수량: {item.number || 0}개
                </Cafeteria.MenuItemDetails>
                <Cafeteria.QuantityControl>
                  <Cafeteria.QuantityControlButton
                    onClick={() => handleQuantityChange(item, -1)}
                  >
                    -
                  </Cafeteria.QuantityControlButton>
                  <span>{item.quantity || 1}</span>
                  <Cafeteria.QuantityControlButton
                    onClick={() => handleQuantityChange(item, 1)}
                  >
                    +
                  </Cafeteria.QuantityControlButton>
                </Cafeteria.QuantityControl>
                <Cafeteria.AddToCartButton
                  className='add-to-cart-button'
                  onClick={() => handleAddToCart(item)}
                >
                  담기
                </Cafeteria.AddToCartButton>
              </div>
            </Cafeteria.MenuItem>
          ))}
        </Cafeteria.MenuList>
        {cart.length > 0 && (
          <Cafeteria.CartSummary>
            <Cafeteria.CartSummaryTitle>장바구니</Cafeteria.CartSummaryTitle>
            <ul>
              {cart.map((cartItem, index) => (
                <Cafeteria.CartItem key={index} className='cart-item'>
                  <Cafeteria.CartItemName>
                    {cartItem.name}
                  </Cafeteria.CartItemName>
                  <Cafeteria.CartItemQuantity>
                    {cartItem.quantity}개
                  </Cafeteria.CartItemQuantity>
                  <Cafeteria.CartItemPrice>
                    {cartItem.price * cartItem.quantity}원
                  </Cafeteria.CartItemPrice>
                  <Cafeteria.RemoveFromCartButton
                    className='remove-from-cart-button'
                    onClick={() => handleRemoveFromCart(cartItem.name)}
                  >
                    ✖
                  </Cafeteria.RemoveFromCartButton>
                </Cafeteria.CartItem>
              ))}
            </ul>
            <Cafeteria.NavigateToPaymentButton onClick={navigateToPayment}>
              결제창으로 이동
            </Cafeteria.NavigateToPaymentButton>
          </Cafeteria.CartSummary>
        )}
      </Cafeteria.RestaurantContainer>
    </Cafeteria.CafeteriaLayout>
  );
};

export default CafeteriaPage;
