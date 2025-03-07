import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const WhiteBox = styled.div`
  width: 337px;
  height: 114px;
  top: 224px;
  left: 23px;
  border-radius: 10px;
  border-width: 1px;

  background-color: #fff;
  border: 1px solid lightgray;
  padding: 15px;
  margin: auto;
  margin-top: 10px;

  radius: 10px;
  box-sizing: border-box;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

export const Notice = styled.div`
  background: #ffe0e0;
  border: 1px solid #ff9999;
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;
  color: #e10707;
  margin-bottom: 20px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 20px;
  line-height: 23.87px;
  letter-spacing: 0%;
  margin: 5px 0;
  text-align: center;
`;

export const Text = styled.p`
  color: black;
  font-size: 16px;
  margin: 5px;
  text-align: center;
`;
export const BoldRed = styled.span`
  color: red;
  font-size: 16px;
  margin: 5px;
  text-align: center;
  font-weight: bold;
`;

export const PointOptions = styled.div`
  display: flex;
`;

export const PointButton = styled.button`
  width: 160px;
  height: 49px;
  top: 372px;
  left: 26px;
  border-radius: 5px;
  border-width: 1px;
  background:rgb(255, 254, 254)
  font-weight: 500;
  font-size: 20px;
  line-height: 23.87px;
  background-color:rgb(255, 255, 255);  
  margin: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  &.selected {
    border: 2px solid #e10707;  
  }
`;
export const Image = styled.img`
  width: 120%;
  height: auto;
`;

export const PaymentMethods = styled.div`
  display: flex;
  padding: 15px;
  gap: 10px;
`;

export const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-width: 1px;
  border-radius: 10px;
  gap: 15px;
  padding: 15px;
  cursor: pointer;
  border: 1px solid #ccc;
  &.selected {
    border: 2px solid #e10707;
  }
`;

export const EstimatedAmount = styled.div`
  margin: 10px;
  padding: 10px;
  width: 336px;
  height: 50px;
  top: 699px;
  left: 27px;
  border-radius: 10px;
  border-width: 1px;
  font-weight: 600;
  font-size: 20px;
  line-height: 23.87px;
  letter-spacing: 0%;
  text-align: center;
  border: 1px solid #ccc;
`;

export const ChargeButton = styled.button`
  width: 330px;

  padding: 15px;
  background: #e10707;

  color: white;
  font-size: 18px;
  border: none;
  font-bold: 10px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition:
    background 0.3s,
    transform 0.2s;

  :hover {
    background: #c0392b;
    transform: scale(1.02);
  }
`;
