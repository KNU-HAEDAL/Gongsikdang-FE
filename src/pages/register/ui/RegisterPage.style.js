import styled from '@emotion/styled';

export const RegisterPageLayout = styled.div`
  @keyframes fadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  width: 400px;
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
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const RegisterTitle = styled.span`
  font-size: 24px;
  color: #333333;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

export const FormInput = styled.input`
  flex: 1;
  padding: 12px;
  border: none;
  border-bottom: 1px solid var(--gray);
  font-size: 14px;
  color: #333;
  background: none;
  transition: border-color 0.3s;

  :focus {
    border-bottom: 1px solid #ffb3b3;
    outline: none;
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px; /* 버튼 크기 조정 */
  border: none;
  border-radius: 50px;
  font-size: 14px;
  cursor: pointer;
  background-color: #ffb3b3;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  :hover {
    transform: translateY(-2px); /* 약간 위로 뜨는 효과 */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 */
  }
`;

export const RegisterSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  background-color: #ffb3b3;
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  background: #ffffff;
  border: 2px solid #ffb3b3;
  border-radius: 50px;
  color: #ffb3b3;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  :hover {
    background-color: #f9f9f9;
    color: #ffb3b3;
  }
`;

export const ErrorMessage = styled.span`
  color: #e10707; /* 빨간 글씨 */
  font-size: var(--font-xs); /* 작은 글씨 */
  text-align: left; /* 왼쪽 정렬 */
  font-weight: 400; /* 가독성을 위한 가벼운 폰트 */

  .active {
    display: block; /* 활성화된 경우 표시 */
  }
`;
