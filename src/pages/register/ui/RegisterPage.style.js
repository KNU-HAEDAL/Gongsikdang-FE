import styled from '@emotion/styled';

/* 회원가입 페이지 전체 레이아웃 */
export const RegisterPageLayout = styled.div`
  @keyframes fadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  width: 390px; /* 페이지 너비 */
  height: 720px; /* 페이지 높이 */
  background-color: #ffffff; /* 배경색 */
  padding: 50px 30px; /* 내부 여백 */
  border-radius: 20px; /* 모서리 둥글기 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* 그림자 */
  text-align: center; /* 텍스트 정렬 */
  animation: fadeIn 1s ease-out forwards; /* 페이드인 애니메이션 */
`;

/* 상단 로고를 감싸는 원형 컨테이너 */
export const LogoCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px; /* 원의 너비 */
  height: 120px; /* 원의 높이 */
  background: #ffffff; /* 배경색 */
  border-radius: 50%; /* 완전한 원 모양 */
  margin: -84px auto 30px; /* 위치 조정 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* 그림자 */
`;

/* 로고 내부의 작은 원 */
export const SubLogoCircle = styled.div`
  width: 95px; /* 내부 원의 너비 */
  height: 95px; /* 내부 원의 높이 */
  background: #2e2e2e; /* 배경색 */
  border-radius: 50%; /* 완전한 원 모양 */
`;

/* 회원가입 페이지 제목 */
export const RegisterTitle = styled.span`
  font-size: 30px; /* 제목 글자 크기 */
  font-weight: 500; /* 글자 두께 */
  color: #2e2e2e; /* 글자 색상 */
  margin-bottom: 20px; /* 하단 여백 */
`;

/* 입력 폼 섹션 */
export const FormSection = styled.section`
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
  gap: 15px; /* 요소 간격 */
  margin-bottom: 30px; /* 하단 여백 */
`;

/* 입력 필드 스타일 */
export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #c2c2c2; /* 밑줄 스타일 */
  padding: 10px 0;
  font-size: 14px;
  color: #333333;
  background: none;

  :focus {
    border-bottom: 2px solid #e10707; /* 포커스 상태 밑줄 강조 */
    outline: none;
  }
`;

/* 입력 필드와 버튼 그룹 */
export const InputGroup = styled.div`
  display: flex;
  align-items: center; /* 세로 정렬 */
  gap: 10px; /* 요소 간격 */
`;

/* 버튼 스타일 */
export const FormButton = styled.button`
  width: 150px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */
  font-size: 16px; /* 글자 크기 */
  font-weight: 700; /* 글자 두께 */
  background-color: #e10707; /* 버튼 배경색 */
  color: #ffffff; /* 버튼 글자색 */
  border: none; /* 테두리 제거 */
  border-radius: 100px; /* 둥근 버튼 */
  cursor: pointer; /* 클릭 가능 커서 */
  transition:
    transform 0.2s,
    box-shadow 0.2s; /* 호버 효과 전환 */

  :hover {
    transform: translateY(-2px); /* 위로 살짝 이동 */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 */
  }
`;

/* 취소 버튼 스타일 */
export const CancelButton = styled(FormButton)`
  background-color: #ffffff; /* 배경색 */
  color: #e10707; /* 글자 색상 */
  border: 2px solid #e10707; /* 테두리 */

  :hover {
    background-color: #f9f9f9; /* 호버 배경색 */
    color: #e10707; /* 호버 글자 색상 */
  }
`;

/* 작은 버튼 스타일 */
export const SmallButton = styled.button`
  width: 90px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */
  font-size: 16px; /* 글자 크기 */
  font-weight: 700; /* 글자 두께 */
  background-color: #e10707; /* 배경색 */
  color: #ffffff; /* 글자색 */
  border: none; /* 테두리 없음 */
  border-radius: 100px; /* 모서리 둥글기 (피그마 기준) */
  cursor: pointer; /* 클릭 가능한 커서 */
  display: flex; /* 텍스트 중앙 정렬 */
  justify-content: center;
  align-items: center;

  /* 위치 조정 */
  position: absolute; /* 부모 요소 기준으로 절대 위치 */
  top: 184px; /* 피그마 기준 상단에서의 위치 */
  left: 265px; /* 피그마 기준 좌측에서의 위치 */

  /* 호버 효과 */
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease; /* 호버 효과 전환 */

  :hover {
    transform: translateY(-2px); /* 살짝 위로 이동 */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 */
  }
`;

/* 에러 메시지 스타일 */
export const ErrorMessage = styled.span`
  font-size: 12px; /* 글자 크기 */
  color: #e10707; /* 에러 색상 */
`;

/* Label 스타일 */
export const Label = styled.label`
  font-size: 14px; /* 글자 크기 */
  color: #777777; /* 라벨 색상 */
`;

/* 버튼 그룹 스타일 */
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between; /* 버튼 간격 */
  margin-top: 20px; /* 상단 여백 */
  gap: 20px; /* 버튼 간 간격 */
`;

/* 하단 푸터 스타일 */
export const Footer = styled.div`
  margin-top: 30px; /* 상단 여백 */
  font-size: 14px; /* 글자 크기 */
  color: #777777; /* 푸터 색상 */
  text-align: center; /* 중앙 정렬 */
`;

/* 로그인 링크 스타일 */
export const LoginLink = styled.span`
  font-size: 16px; /* 글자 크기 */
  color: #e10707; /* 빨간색 텍스트 */
  cursor: pointer; /* 클릭 가능한 커서 */
  text-decoration: none; /* 기본 밑줄 제거 */

  :hover {
    text-decoration: underline; /* 호버 시 밑줄 추가 */
  }
`;

export const Background = styled.div`
  ); /* 배경 그라데이션 */
  display: flex; /* 유연한 박스 모델 */
  justify-content: center; /* 가로 정렬 */
  align-items: center; /* 세로 정렬 */
`;
