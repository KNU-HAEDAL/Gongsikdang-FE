import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CloseIcon from '@/pages/_assets/icons/CloseIcon.jsx';
import FilledStarIcon from '@/pages/_assets/icons/FilledStarIcon';
import LeftTriangleIcon from '@/pages/_assets/icons/LeftTriangleIcon';
import RightTriangleIcon from '@/pages/_assets/icons/RightTriangleIcon';

import { Header } from '@/shared/index.js';

import * as Styled from './CornerDPage.style.js';

// 임시 데이터
const menuData = [
  {
    id: 1,
    name: '떡라면',
    price: 3000,
    rating: 5,
    reviews: 200,
    stock: 200,
    image: './images/dduckramen.jpg', // public 폴더 내 이미지 경로
  },
  {
    id: 2,
    name: '만두라면',
    price: 3500,
    rating: 3,
    reviews: 200,
    stock: 200,
    image: '/images/manduramen.jpg',
  },
  {
    id: 3,
    name: '삼겹김치전골',
    price: 12000,
    rating: 5,
    reviews: 200,
    stock: 200,
    image: '/images/porkkimchisoup.jpg',
  },
  {
    id: 4,
    name: '최루탄라면',
    price: 3500,
    rating: 5,
    reviews: 200,
    stock: 200,
    image: '/images/bombramen.jpg',
  },
];

const CornerDPage = () => {
  const [cart, setCart] = useState([]); // 장바구니 상태
  const [quantities, setQuantities] = useState(
    menuData.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  ); // 수량 상태

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: quantities[item.id] }]);
    }
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, prev[id] + delta);
      return { ...prev, [id]: newQuantity };
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Styled.Background>
      <Styled.PageLayout>
        <Header title='D 코너' />
        <Styled.MenuList>
          {menuData.map((item) => (
            <Styled.MenuCard key={item.id}>
              <Styled.Image src={item.image} alt={item.name} />
              <Styled.MenuTitle>{item.name}</Styled.MenuTitle>
              <Styled.MenuPrice>
                {item.price.toLocaleString()}원
              </Styled.MenuPrice>
              <Styled.Review>
                {[...Array(5)].map((_, index) => (
                  <FilledStarIcon
                    key={index}
                    color={index < item.rating ? '#FFD600' : '#C0C0C0'}
                  />
                ))}
              </Styled.Review>
              <Styled.ReviewButton>리뷰 보기</Styled.ReviewButton>
              <Styled.QuantityControl>
                <Styled.QuantityButton
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  <LeftTriangleIcon color='#000' />
                </Styled.QuantityButton>
                <Styled.QuantityValue>
                  {quantities[item.id]}
                </Styled.QuantityValue>
                <Styled.QuantityButton
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  <RightTriangleIcon color='#000' />
                </Styled.QuantityButton>
              </Styled.QuantityControl>
              <Styled.Stock>남은 수량: {item.stock}개</Styled.Stock>
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
                  {cart[0].name}{' '}
                  <Styled.RedText>{totalQuantity}개</Styled.RedText>
                </Styled.CartItem>
                <Styled.CartPrice>
                  {totalPrice.toLocaleString()}원
                </Styled.CartPrice>
                <Styled.RemoveButton onClick={() => removeFromCart(cart[0].id)}>
                  <CloseIcon color='#e10707' size={11} /> {/* CloseIcon 추가 */}
                </Styled.RemoveButton>
              </>
            ) : (
              '장바구니가 비어 있습니다.'
            )}
          </Styled.CartSummary>
          <Styled.CheckoutButton disabled={cart.length === 0}>
            결제하기
          </Styled.CheckoutButton>
        </Styled.CartSection>
      </Styled.PageLayout>
    </Styled.Background>
  );
};

export default CornerDPage;
