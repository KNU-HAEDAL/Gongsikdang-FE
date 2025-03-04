import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CloseIcon from '@/pages/_assets/icons/CloseIcon.jsx';
import FilledStarIcon from '@/pages/_assets/icons/FilledStarIcon';
import LeftTriangleIcon from '@/pages/_assets/icons/LeftTriangleIcon';
import RightTriangleIcon from '@/pages/_assets/icons/RightTriangleIcon';

import { cornerBListAPI } from '../apis/cornerB.api.js';
import * as Styled from './CornerBPage.style.js';

const CornerBPage = () => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        console.log('메뉴 데이터 요청 시작');
        const response = await cornerBListAPI();
        console.log('API 응답 데이터:', response.data);

        setMenuData(response.data);
        setQuantities(
          response.data.reduce(
            (acc, item) => ({ ...acc, [item.foodId]: 1 }),
            {}
          )
        );
      } catch (error) {
        console.error('메뉴 데이터 불러오기 오류:', error);
      }
    };

    fetchMenu();
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.foodId === item.foodId
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.foodId === item.foodId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantities[item.foodId],
              }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: quantities[item.foodId] }];
      }
    });
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
    <div>
      <Styled.MenuList>
        {menuData.map((item) => (
          <Styled.MenuCard key={item.foodId}>
            <Styled.Image
              src={item.image || '/images/default.jpg'}
              alt={item.foodName}
            />
            <Styled.MenuTitle>{item.foodName}</Styled.MenuTitle>
            <Styled.MenuPrice>{item.price.toLocaleString()}원</Styled.MenuPrice>
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
          {cart.length > 0
            ? cart.map((item) => (
                <Styled.CartItem key={item.foodId}>
                  {item.foodName}{' '}
                  <Styled.RedText>{item.quantity}개</Styled.RedText>
                  <Styled.CartPrice>
                    {totalPrice.toLocaleString()}원
                  </Styled.CartPrice>
                  <Styled.RemoveButton
                    onClick={() => removeFromCart(item.foodId)}
                  >
                    <CloseIcon color='#e10707' size={11} />
                  </Styled.RemoveButton>
                </Styled.CartItem>
              ))
            : '장바구니가 비어 있습니다.'}
        </Styled.CartSummary>
        <Styled.CheckoutButton
          onClick={() => navigate('/payment')}
          disabled={cart.length === 0}
        >
          결제하기
        </Styled.CheckoutButton>
      </Styled.CartSection>
    </div>
  );
};

export default CornerBPage;
