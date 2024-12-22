import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const RestaurantInfoPageLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
`;

export const InfoRestaurant = styled.div`
  max-width: var(--page-width);
  width: 100%;
  background: #fff;
  border-radius: var(--button-border-radius);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: var(--font-lg);
  color: var(--red);
  margin-bottom: 20px;
  font-weight: bold;
`;

export const MenuList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 줄로 정렬 */
  gap: 20px;
  padding: 0;
  list-style: none;
  margin: 0 auto;
`;

export const MenuItem = styled.li`
  background-color: var(--white);
  border: 1px solid var(--gray);
  border-radius: var(--button-border-radius);
  text-align: center;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  :hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const MenuItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--button-border-radius);
  margin-bottom: 10px;
`;

export const MenuItemName = styled.h3`
  font-size: var(--font-sm);
  color: var(--black);
  margin-bottom: 5px;
`;

export const MenuItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItemPrice = styled.p`
  font-size: var(--font-sm);
  color: var(--red);
  font-weight: bold;
`;

export const QuantityControls = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const QuantityControlsButton = styled.button`
  background-color: var(--gray);
  color: #fff;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: var(--button-border-radius);
  font-size: var(--font-sm);
  cursor: pointer;
  transition: background-color 0.2s;

  :hover {
    background-color: var(--red);
  }
`;

export const AddToCartButton = styled.button`
  background-color: var(--red);
  color: var(--white);
  border: none;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  font-size: var(--font-sm);
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: #b50606;
  }
`;

export const Error = styled.p`
  color: var(--red);
  font-size: var(--font-sm);
  margin-top: 10px;
`;

export const CartSummary = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: var(--lightGray);
  border-radius: var(--button-border-radius);
  border: 1px solid var(--gray);
`;

export const CartSummaryTitle = styled.h2`
  font-size: var(--font-md);
  color: var(--red);
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto; /* 메뉴 이름, 수량, 가격, 제거 버튼 */
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--gray);
  font-size: var(--font-sm);
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */

  :last-child {
    border-bottom: none;
  }
`;

export const CartItemText = styled.span`
  display: inline-block;
  text-align: center;
`;

export const CartItemName = styled.span`
  text-align: left;
  font-weight: bold;
`;

export const CartItemQuantity = styled.span`
  color: var(--black);
`;

export const CartItemPrice = styled.span`
  color: var(--red);
  font-weight: bold;
  white-space: nowrap; /* 가격 텍스트 줄바꿈 방지 */
  text-align: right; /* 오른쪽 정렬로 더욱 깔끔하게 */
`;

export const CartItemRemoveButton = styled.button`
  background-color: var(--gray);
  color: var(--white);
  border: none;
  padding: 5px 10px;
  border-radius: var(--button-border-radius);
  font-size: var(--font-sm);
  cursor: pointer;
  transition: background-color 0.2s;

  :hover {
    background-color: var(--red);
  }
`;

export const NavigateButton = styled(Link)`
  display: block;
  width: 100%;
  background-color: var(--red);
  color: var(--white);
  border: none;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  font-size: var(--font-md);
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;

  :hover {
    background-color: #b50606;
  }
`;

export const NavigateToPaymentButton = styled(NavigateButton)`
  display: block;
  width: 100%;
  background-color: var(--red);
  color: var(--white);
  border: none;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  font-size: var(--font-md);
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;

  :hover {
    background-color: #b50606;
  }
`;
