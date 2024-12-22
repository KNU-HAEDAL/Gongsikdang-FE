import styled from '@emotion/styled';

export const CafeteriaLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
`;

export const RestaurantContainer = styled.div`
  max-width: var(--page-width);
  width: 100%;
  background: #fff;
  border-radius: var(--button-border-radius);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const CafeteriaTitle = styled.h1`
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

export const MenuItemName = styled.h2`
  font-size: var(--font-sm);
  color: var(--black);
  margin-bottom: 5px;
`;

export const MenuItemDetails = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const QuantityControlButton = styled.button`
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

export const CartItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto; /* 메뉴 이름, 수량, 가격, 제거 버튼 */
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--gray);
  font-size: var(--font-sm);
  white-space: nowrap;

  :last-child {
    border-bottom: none;
  }
`;

export const CartItemName = styled.span`
  text-align: left;
  font-weight: bold;
`;

export const CartItemQuantity = styled.span`
  color: var(--black);
`;

export const CartItemPrice = styled.span`
  font-weight: bold;
  color: var(--red);
  white-space: nowrap;
  text-align: right;
`;

export const RemoveFromCartButton = styled.button`
  background-color: var(--gray);
  color: var(--white);
  border: none;
  padding: 5px 10px;
  border-radius: var(--button-border-radius);
  font-size: var(--font--ssmall);
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const NavigateToPaymentButton = styled.button`
  display: block;
  width: 100%;
  background-color: var(--red);
  color: var(--white);
  border: none;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  font-size: var(--font--regular);
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
`;
