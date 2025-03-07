import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin: 10px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RedButton = styled.button`
  width: 76px;
  height: 29px;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: var(--red);
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #c30606;
  }
`;

export const PointBox = styled.div`
  width: 337px;
  height: 55px;
  border-radius: 10px;
  border-width: 1px;

  background-color: #fff;
  border: 1px solid lightgray;
  padding: 15px;
  margin: auto;
  margin-top: 10px;

  box-sizing: border-box;
  text-align: left;
`;

export const PointText = styled.span`
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  background-color: #000000;
  margin-bottom: 15px;
`;

export const BoldText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const BoldRed = styled.span`
  color: red;
  font-size: 16px;
  margin: 5px;
  text-align: center;
  font-weight: bold;
`;

export const Section = styled.section`
  margin-bottom: 20px;
`;

export const InfoBox = styled.div`
  width: 337px;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid var(--gray);
  padding: 15px;
  margin-top: 10px;

  border-radius: 10px;
  box-sizing: border-box;
  text-align: left;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: end;
`;
