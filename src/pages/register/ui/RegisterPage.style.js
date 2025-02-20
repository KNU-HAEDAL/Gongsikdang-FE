import styled from '@emotion/styled';

/* 회원가입 페이지 전체 레이아웃 */
export const RegisterPageLayout = styled.div`
  @keyframes fadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  top: 60px;
  width: 370px;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 50px 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 1s ease-out forwards;
  position: relative;
  padding-bottom: 100px;
`;

/* 상단 로고 외부 원 */
export const LogoCircle = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  box-shadow: 4px 4px 20px 0px #00000040;
`;

/* 로고 내부 원 */
export const SubLogoCircle = styled.div`
  width: 95px;
  height: 95px;
  font-family: 'BMJUA';
  background-color: #000;
  color: #fff;
  background-size: cover;
  background: var(--black);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 34px;
  justify-content: center;
  align-items: center;
  display: flex;
  .yellow {
    color: #eff697;
  }
  .blue {
    color: #57e7fe;
  }
`;

/* 회원가입 페이지 제목 */
export const RegisterTitle = styled.span`
  width: 104px;
  height: 36px;
  top: 80px;
  left: 135px;
  font-size: 30px;
  font-weight: 500;
  line-height: 35.8px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  position: absolute;
`;

/* 입력 폼 섹션 */
export const FormSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
  transform: translateY(50px);
  color: #c2c2c2;
`;

/* 입력 필드 스타일 */
export const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-bottom: 1px solid #c2c2c2;
  font-size: 14px;
  color: #2e2e2e;
  background: none;
  transition: border-color 0.3s;
  :focus {
    border-bottom: 1px solid #b45555;
    outline: none;
  }
`;

/* 입력필드 라인 */
export const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

/* 회원가입 버튼 스타일 */
export const FormButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--red);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  transform: translateY(60px);
  box-shadow: 0px 4px 20px 0px #00000040;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  :hover {
    transform: translateY(58px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

/* 취소 버튼 스타일 */
export const CancelButton = styled(FormButton)`
  background-color: #ffffff;
  color: var(--red);
  border: 3px solid var(--red);

  :hover {
    background-color: #f9f9f9;
    color: var(--red);
  }
`;

/* 중복확인 버튼 스타일 */
export const SmallButton = styled.button`
  width: 90px;
  height: 40px;
  position: absolute;
  top: 130px;
  left: 245px;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--red);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  box-shadow: 0px 4px 20px 0px #00000040;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

/* 에러 메시지 스타일 */
export const ErrorMessage = styled.span`
  font-size: 12px;
  color: var(--red);
  height: 10px;
  margin-top: 4px;
  position: absolute;
  top: 40px;
  display: ${({ children }) => (children ? 'block' : 'none')};
`;

/* Label 스타일-밑줄 아래부분 */
export const Label = styled.label`
  font-size: 14px;
  color: #777777;
  margin-top: 5px;
`;

/* 버튼 그룹 스타일 */
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;
`;

/* 하단 푸터 스타일 */
export const Footer = styled.div`
  margin-top: 30px;
  font-size: 16px;
  color: var(--black);
  transform: translateY(65px);
`;

/* 로그인 링크 스타일 */
export const LoginLink = styled.span`
  margin-left: 5px;
  font-size: 18px;
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

/*아이콘 디자인*/
export const InfoCircledIcon = styled.svg`
  width: 17px;
  height: 17px;
  color: #777777;
  fill: currentColor;
`;
