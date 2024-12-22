import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as RestaurantInfo from './RestaurantInfoPage.style';
import * as Common from '@/shared/styles';

const RestaurantInfoPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get('/menu/info', {
          params: { restaurantName: '정보센터식당' },
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
    <RestaurantInfo.RestaurantInfoPageLayout>
      <RestaurantInfo.InfoRestaurant>
        {/* 상단 버튼 영역 */}
        <Common.TopButtons>
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
        <RestaurantInfo.Title>정보센터식당 메뉴</RestaurantInfo.Title>
        {error && <RestaurantInfo.Error>{error}</RestaurantInfo.Error>}
        <RestaurantInfo.MenuList>
          {menuItems.map((item, index) => (
            <RestaurantInfo.MenuItem key={index}>
              {/* 메뉴 이미지 */}
              <RestaurantInfo.MenuImage
                src={`/images1/${item.name.replace(/\s/g, '')}.jpg`}
                alt={item.name}
                className='menu-item-image'
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                onError={(e) => (e.target.src = '/images1/default.jpg')} // 기본 이미지
              />
              {/* 메뉴 이름 */}
              <RestaurantInfo.MenuName>{item.name}</RestaurantInfo.MenuName>
              <RestaurantInfo.MenuDetails>
                <RestaurantInfo.MenuPrice>
                  가격: {item.price}원
                </RestaurantInfo.MenuPrice>
                {/* 남은 수량 표시 */}
                <RestaurantInfo.MenuQuantity>
                  남은 수량: {item.number || 0}개
                </RestaurantInfo.MenuQuantity>
                <RestaurantInfo.QuantityControls>
                  <RestaurantInfo.QuantityButton
                    onClick={() => handleQuantityChange(item, -1)}
                  >
                    -
                  </RestaurantInfo.QuantityButton>
                  <RestaurantInfo.QuantityValue>
                    {item.quantity || 1}
                  </RestaurantInfo.QuantityValue>
                  <RestaurantInfo.QuantityButton
                    onClick={() => handleQuantityChange(item, 1)}
                  >
                    +
                  </RestaurantInfo.QuantityButton>
                </RestaurantInfo.QuantityControls>
                <RestaurantInfo.AddToCartButton
                  onClick={() => handleAddToCart(item)}
                >
                  담기
                </RestaurantInfo.AddToCartButton>
              </RestaurantInfo.MenuDetails>
            </RestaurantInfo.MenuItem>
          ))}
        </RestaurantInfo.MenuList>
        {cart.length > 0 && (
          <RestaurantInfo.CartSummary>
            <RestaurantInfo.CartTitle>장바구니</RestaurantInfo.CartTitle>
            <RestaurantInfo.CartList>
              {cart.map((cartItem, index) => (
                <RestaurantInfo.CartItem key={index}>
                  <RestaurantInfo.CartItemName>
                    {cartItem.name}
                  </RestaurantInfo.CartItemName>
                  <RestaurantInfo.CartItemQuantity>
                    {cartItem.quantity}개
                  </RestaurantInfo.CartItemQuantity>
                  <RestaurantInfo.CartItemPrice>
                    {cartItem.price * cartItem.quantity}원
                  </RestaurantInfo.CartItemPrice>
                  <RestaurantInfo.RemoveFromCartButton
                    onClick={() => handleRemoveFromCart(cartItem.name)}
                  >
                    ✖
                  </RestaurantInfo.RemoveFromCartButton>
                </RestaurantInfo.CartItem>
              ))}
            </RestaurantInfo.CartList>
            <RestaurantInfo.NavigateToPaymentButton onClick={navigateToPayment}>
              결제창으로 이동
            </RestaurantInfo.NavigateToPaymentButton>
          </RestaurantInfo.CartSummary>
        )}
      </RestaurantInfo.InfoRestaurant>
    </RestaurantInfo.RestaurantInfoPageLayout>
  );
};

export default RestaurantInfoPage;
