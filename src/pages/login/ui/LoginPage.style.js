import styled from '@emotion/styled';

export const LoginPageLayout = styled.div`
  width: var(--page-width);
  background-color: #fff;
  border-radius: 20px;
  padding: 50px 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 1s ease-out forwards;
  position: relative;
`;

export const LogoCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 50%;
  margin: -70px auto 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const SubLogoCircle = styled.div`
  width: 80px;
  height: 80px;
<<<<<<< HEAD
  font-family: 'BMJUA';
=======
  background-color: #000;
  color: #fff;
>>>>>>> e85e8022869169d9e1c316dee45504b9f1c4a51d
  background-size: cover;
  font-size: 30px;
  color: var(--gray);
  background: var(--black);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'BMJUA';
  font-size: var(--font-xl);
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const LoginTitle = styled.h1`
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--red);
  margin-bottom: 20px;
`;

export const SubTitle = styled.p`
  font-size: var(--font-md);
  font-weight: 700;
  color: var(--gray);
  margin-bottom: 20px;
`;

export const LoginBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-bottom: 1px solid var(--gray);
  font-size: var(--font-sm);
  color: var(--gray);
  background: none;
  transition: border-color 0.3s;
  :focus {
    border-bottom: 1px solid #b45555;
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: var(--font-md);
  font-weight: 700;
  color: #fff;
  background: var(--red);
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.3s,
    transform 0.2s;

  :hover {
    transform: translateY(-2px);
  }
`;

export const SignUpWrapper = styled.div`
  margin-top: 30px;
  font-size: var(--font-sm);
  color: var(--black);
`;

export const SignUpButton = styled.button`
  margin-left: 5px;
  font-size: var(--font-md);
  font-weight: 700;
  color: var(--red);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  :hover {
    transform: translateY(-2px);
  }
`;
