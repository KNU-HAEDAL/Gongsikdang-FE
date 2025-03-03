import styled from '@emotion/styled';

export const MenuList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  width: 355;
  height: 1088;
  top: 76px;
  left: 19px;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 15px;
  margin-bottom: 20px;
`;

export const MenuCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  width: 170;
  height: 346;
  border-radius: 10px;
  border-width: 1px;
  border: 1px solid #c2c2c2;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  top: 16px;
  left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;

  object-fit: cover;
  border-radius: 10px;
`;

export const MenuTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 5px 0;
  width: 116;
  height: 21;
  top: 115px;
  left: 27px;
  margin-bottom: 10px;
`;

export const MenuPrice = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #2e2e2e;
  width: 96;
  height: 20;
  top: 145px;
  left: 37px;
  margin-bottom: 5px;
`;

/* 별점 */
export const Review = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin-bottom: 5px;
`;

export const ReviewCount = styled.span`
  font-size: 16px;
  color: #c2c2c2;
  margin-bottom: 5px;
`;

export const ReviewButton = styled.button`
  width: 83px;
  height: 29px;
  margin-top: 5px;
  font-size: 16px;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 1px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    transform: translateY(2px);
  }
`;

export const QuantityControl = styled.div`
  width: 63px;
  height: 22px;
  top: 245px;
  left: 53.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const QuantityButton = styled.button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: none;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;

  svg {
    width: 10px;
    height: 10px;
  }
`;

export const QuantityValue = styled.span`
  width: 19px;
  height: 22px;
  margin: 0 10px;
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 5px;
`;

/*남은 수량*/
export const Stock = styled.p`
  color: #2e2e2e;
  width: 135px;
  height: 22px;
  top: 276px;
  left: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.36px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const AddToCartButton = styled.button`
  display: flex;
  width: 138px;
  height: 29px;
  top: 307px;
  left: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 10px;
  background-color: #e10707;
  color: white;
  border: 1px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: #c30606;
  }
`;

export const Cart = styled.div`
  width: 83px;
  height: 29px;
  top: 1182px;
  left: 153px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.64px;
  letter-spacing: 0%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const CartSection = styled.div`
  width: 358px;
  height: 135px;
  top: 1229px;
  left: 16px;
  border-radius: 10px;
  gap: 10px;
  justify-content: center;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #c2c2c2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const CartSummary = styled.div`
  display: flex;
  width: 328px;
  height: 47px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  padding-right: 10px;
  padding-left: 10px;
`;

export const CartItem = styled.span`
  font-weight: 400;
  font-size: 20px;
  color: #000000;
`;

export const CartPrice = styled.span`
  color: #000000;
`;

export const RedText = styled.span`
  color: #e10707;
`;

export const RemoveButton = styled.button`
  background: #f6f3f3;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: none;
  gap: 10px;
  padding: 5px;
  cursor: pointer;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: #e10707;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
