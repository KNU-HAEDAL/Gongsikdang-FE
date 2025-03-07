import styled from '@emotion/styled';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 0px;
  width: 390px;
  height: 60px;

  border-radius: 15px;
  padding: 10px 10px;
  box-sizing: border-box;
  overflow: hidden;
`;
export const WhiteBox = styled.div`
width: 337px;
height: 110px
top: 113px;
left: 28px;
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const WrapperWithBorder = styled.div`
  border-top: 1px solid var(--gray);
  padding-bottom: 5px;
`;
export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px 0;
`;

export const PointInput = styled.input`
  width: 50px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: right;
`;

export const PointButton = styled.button`
  width: 80px;
  height: 20px;
  padding: 10px;
  font-size: 10px
  font-weight: 700;
  color: #fff;
  background: var(--red);
  border: none;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: #c0392b;
    transform: scale(1.02);
  }
`;

export const MethodBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  height: 100px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
`;

export const Image = styled.img`
  width: 120%;
  height: auto;
`;

export const SubTitle = styled.h2`
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 20px;
  line-height: 23.87px;
  letter-spacing: 0%;
  margin: 5px 0;
`;

export const TotalText = styled.p`
  color: black;
  font-size: 16px;
  margin: 5px;
`;

export const SubmitButton = styled.button`
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
