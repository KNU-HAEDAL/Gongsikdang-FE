import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import InfoCircledIcon from '@/pages/_assets/icons/InfoCircledIcon';

import * as Register from './RegisterPage.style';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  // 에러 메시지 상태 관리
  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // 중복확인 상태 관리
  const [idValid, setIdValid] = useState(null);

  // 아이디 중복확인 함수 (✅ 복구 완료)
  const handleIdDuplicationCheck = async () => {
    try {
      const response = await axios.post(
        'https://gongsikdang-be-production.up.railway.app/user/checkDuplicateId',
        { id }
      );

      if (response.data.isDuplicate) {
        setIdValid(false);
        setIdError('중복된 아이디입니다.');
      } else {
        setIdValid(true);
        setIdError('');
        alert('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      setIdError('아이디 중복 확인 중 오류가 발생했습니다.');
    }
  };

  // 비밀번호 유효성 검사
  const handlePasswordValidation = () => {
    const isValid =
      password.length >= 6 &&
      password.length <= 12 &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password);

    if (!isValid) {
      setPasswordError(
        '비밀번호는 6자 이상의 영문, 숫자, 특수문자를 포함해야 합니다.'
      );
    } else {
      setPasswordError('');
    }
  };

  // 비밀번호 재확인 검사
  const handlePasswordConfirmValidation = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordError('');
    }
  };

  // 회원가입 제출 함수
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !idValid ||
      !id ||
      !password ||
      !name ||
      passwordError ||
      confirmPasswordError
    ) {
      alert('입력 정보를 확인해주세요.');
      return;
    }

    try {
      const response = await axios.post(
        'https://gongsikdang-be-production.up.railway.app/user/register',
        {
          id,
          password,
          name, // ✅ 기존 nickname → name 변경
          point: 0, // 기본값 0 설정
        }
      );

      if (response.status === 200) {
        alert('회원가입이 완료되었습니다.');
        navigate('/login');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <Register.Background>
      <Register.RegisterPageLayout>
        {/* 로고 */}
        <Register.LogoCircle>
          <Register.SubLogoCircle>
            <span className='yellow'>공</span>
            <span className='blue'>식당</span>
          </Register.SubLogoCircle>
        </Register.LogoCircle>

        {/* 제목 */}
        <Register.RegisterTitle>회원가입</Register.RegisterTitle>

        <form onSubmit={handleSubmit}>
          {/* 아이디 입력 */}
          <Register.FormSection>
            <Register.InputGroup>
              <Register.FormInput
                type='text'
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder='아이디를 입력해주세요'
              />
            </Register.InputGroup>
            <Register.ErrorMessage>{idError}</Register.ErrorMessage>
            <Register.Label>
              <InfoCircledIcon
                style={{ marginRight: '5px', verticalAlign: 'middle' }}
              />
              6~12자로 입력해주세요.
            </Register.Label>
          </Register.FormSection>
          <Register.SmallButton
            type='button'
            onClick={handleIdDuplicationCheck}
          >
            중복확인
          </Register.SmallButton>
          {/* 비밀번호 입력 */}
          <Register.FormSection>
            <Register.FormInput
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordValidation}
              placeholder='비밀번호를 입력해주세요.'
            />
            {passwordError && (
              <Register.ErrorMessage>{passwordError}</Register.ErrorMessage>
            )}
            <Register.Label>
              <InfoCircledIcon
                style={{ marginRight: '5px', verticalAlign: 'middle' }}
              />
              6자 이상, 영문자 및 숫자, 특수문자 포함해야 합니다.
            </Register.Label>
          </Register.FormSection>

          {/* 비밀번호 확인 */}
          <Register.FormSection>
            <Register.FormInput
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={handlePasswordConfirmValidation}
              placeholder='비밀번호를 재입력해주세요.'
            />
            {confirmPasswordError && (
              <Register.ErrorMessage>
                {confirmPasswordError}
              </Register.ErrorMessage>
            )}
            <Register.Label>
              <InfoCircledIcon
                style={{ marginRight: '5px', verticalAlign: 'middle' }}
              />
              동일한 비밀번호를 한 번 더 입력해주세요.
            </Register.Label>
          </Register.FormSection>

          {/* 이름 입력 */}
          <Register.FormSection>
            <Register.FormInput
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='이름을 입력해주세요.'
            />
            <Register.Label>
              <InfoCircledIcon
                style={{ marginRight: '5px', verticalAlign: 'middle' }}
              />
              실명을 입력해주세요.
            </Register.Label>
          </Register.FormSection>

          {/* 회원가입 및 취소 버튼 */}
          <Register.ButtonGroup>
            <Register.FormButton type='submit'>회원가입</Register.FormButton>
            <Register.CancelButton
              type='button'
              onClick={() => navigate('/login')}
            >
              취소
            </Register.CancelButton>
          </Register.ButtonGroup>
        </form>

        {/* 로그인 링크 */}
        <Register.Footer>
          이미 회원이라면?{' '}
          <Register.LoginLink onClick={() => navigate('/login')}>
            로그인하기
          </Register.LoginLink>
        </Register.Footer>
        <button onClick={() => navigate('/corner')}>
          코너선택 페이지로 돌아가기
        </button>
      </Register.RegisterPageLayout>
    </Register.Background>
  );
};

export default RegisterPage;
