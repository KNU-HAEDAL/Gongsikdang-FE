import styled from '@emotion/styled';

export const LoginPageLayout = styled.div`
  width: 380px;
  background-color: #fff;
  padding: 50px 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 1s ease-out forwards;
`;

export const LogoCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90px;
  height: 90px;
  background: #ffb3b3;
  border-radius: 50%;
  margin: -70px auto 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  :hover {
    background: linear-gradient(135deg, #ffb3b3, #edeaea);
  }
`;

export const SubLogoCircle = styled.div`
  width: 60px;
  height: 60px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.span`
  font-size: var(--font-lg);
  font-weight: 800;
  color: #b45555;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: var(--font-xs);
  color: #aaa;
  margin: 10px 0;
`;

export const LoginBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-bottom: 1px solid var(--gray);
  font-size: var(--font-sm);
  color: var(--black);
  background: none;
  transition: border-color 0.3s;

  :focus {
    border-bottom: 1px solid #b45555;
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 14px; /* 버튼 크기 적당히 조정 */
  font-size: 14px; /* 버튼 텍스트 크기 감소 */
  font-weight: 600;
  color: #fff;
  background: #ffb3b3;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const SignUpButton = styled.button`
  margin-top: 20px;
  font-size: var(--font-xs);
  color: #b45555;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s;

  :hover {
    color: var(--gray);
  }
`;
