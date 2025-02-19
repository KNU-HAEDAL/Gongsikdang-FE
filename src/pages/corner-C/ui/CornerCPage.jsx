import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import CloseIcon from '@/pages/_assets/icons/CloseIcon.jsx';
import FilledStarIcon from '@/pages/_assets/icons/FilledStarIcon';
import LeftTriangleIcon from '@/pages/_assets/icons/LeftTriangleIcon';
import RightTriangleIcon from '@/pages/_assets/icons/RightTriangleIcon';

import { Header } from '@/shared/index.js';

import * as Styled from './CornerCPage.style.js';

const CornerCPage = () => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          console.error('JWT 토큰이 없습니다. 로그인 후 시도하세요.');
          return;
        }

        const response = await axios.get(
          'https://gongsikdang-be-production.up.railway.app/api/menu/info/C',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        );

        if (response.status === 200) {
          setMenuData(response.data);
          setQuantities(
            response.data.reduce(
              (acc, item) => ({ ...acc, [item.foodId]: 1 }),
              {}
            )
          );
        }
      } catch (error) {
        console.error('메뉴 데이터 불러오기 오류:', error);
      }
    };

    fetchMenu();
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.foodId === item.foodId
    );
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.foodId === item.foodId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: quantities[item.foodId] }]);
    }
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, prev[id] + delta);
      return { ...prev, [id]: newQuantity };
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.foodId !== id));
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Styled.Background>
      <Styled.PageLayout>
        <Header title='C 코너' />
        <Styled.MenuList>
          {menuData.map((item) => (
            <Styled.MenuCard key={item.foodId}>
              <Styled.Image
                src={item.image || '/images/default.jpg'}
                alt={item.foodName}
              />
              <Styled.MenuTitle>{item.foodName}</Styled.MenuTitle>
              <Styled.MenuPrice>
                {item.price.toLocaleString()}원
              </Styled.MenuPrice>
              <Styled.Review>
                {[...Array(5)].map((_, index) => (
                  <FilledStarIcon
                    key={index}
                    color={index < item.avgStarRating ? '#FFD600' : '#C0C0C0'}
                  />
                ))}
              </Styled.Review>
              <Styled.ReviewButton onClick={() => navigate('/review/food')}>
                리뷰보기
              </Styled.ReviewButton>
              <Styled.QuantityControl>
                <Styled.QuantityButton
                  onClick={() => handleQuantityChange(item.foodId, -1)}
                >
                  <LeftTriangleIcon color='#000' />
                </Styled.QuantityButton>
                <Styled.QuantityValue>
                  {quantities[item.foodId]}
                </Styled.QuantityValue>
                <Styled.QuantityButton
                  onClick={() => handleQuantityChange(item.foodId, 1)}
                >
                  <RightTriangleIcon color='#000' />
                </Styled.QuantityButton>
              </Styled.QuantityControl>
              <Styled.Stock>남은 수량: {item.number}개</Styled.Stock>
              <Styled.AddToCartButton onClick={() => addToCart(item)}>
                담기
              </Styled.AddToCartButton>
            </Styled.MenuCard>
          ))}
        </Styled.MenuList>

        <Styled.Cart>장바구니</Styled.Cart>
        <Styled.CartSection>
          <Styled.CartSummary>
            {cart.length > 0 ? (
              <>
                <Styled.CartItem>
                  {cart[0].foodName}{' '}
                  <Styled.RedText>{totalQuantity}개</Styled.RedText>
                </Styled.CartItem>
                <Styled.CartPrice>
                  {totalPrice.toLocaleString()}원
                </Styled.CartPrice>
                <Styled.RemoveButton
                  onClick={() => removeFromCart(cart[0].foodId)}
                >
                  <CloseIcon color='#e10707' size={11} />
                </Styled.RemoveButton>
              </>
            ) : (
              '장바구니가 비어 있습니다.'
            )}
          </Styled.CartSummary>
          <Styled.CheckoutButton
            onClick={() => navigate('/payment')}
            disabled={cart.length === 0}
          >
            결제하기
          </Styled.CheckoutButton>
        </Styled.CartSection>
      </Styled.PageLayout>
    </Styled.Background>
  );
};

export default CornerCPage;
