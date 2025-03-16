import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import InfoCircledIcon from '@/pages/_assets/icons/InfoCircledIcon';

import { duplicateIdApi, registerApi } from '../apis';
import * as Register from './RegisterPage.style';
import { useMutation } from '@tanstack/react-query';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const [idError, setIdError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [idValid, setIdValid] = useState(null);

  const { mutate: checkIdDuplicate, isLoading: isCheckingId } = useMutation({
    mutationFn: ({ id }) => duplicateIdApi({ id }),
    onSuccess: (data) => {
      if (data.isDuplicate) {
        setIdValid(false);
        setIdError('중복된 아이디입니다.');
      } else {
        setIdValid(true);
        setIdError('');
        toast.success('사용 가능한 아이디입니다.');
      }
    },
    onError: () => {
      setIdError('아이디 중복 확인 중 오류가 발생했습니다.');
    },
  });

  const { mutate: registerUser } = useMutation({
    mutationFn: ({ id, password, name }) => registerApi({ id, password, name }),
    onSuccess: () => {
      toast.success('회원가입 성공!');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    },
    onError: () => {
      toast.error('회원가입 실패. 다시 시도해주세요.');
    },
  });
  // 아이디 유효성 검사
  const handleIdValidation = (value) => {
    setId(value);
    if (value.length < 6 || value.length > 12) {
      setIdError('아이디는 6~12자로 입력해주세요.');
      setIdValid(false);
    } else {
      setIdError('');
      setIdValid(true);
    }
  };

  // 닉네임 유효성 검사
  const handleNameValidation = (value) => {
    setName(value);
    const nameRegex = /^[가-힣a-zA-Z0-9]{3,}$/; // 특수문자 제외, 최소 3자 이상
    if (!nameRegex.test(value)) {
      setNameError('닉네임은 특수문자를 제외한 3글자 이상 입력해주세요.');
    } else {
      setNameError('');
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

    setPasswordError(
      isValid
        ? ''
        : '비밀번호는 6자 이상의 영문, 숫자, 특수문자를 포함해야 합니다.'
    );
  };

  // 비밀번호 확인 검사
  const handlePasswordConfirmValidation = () => {
    setConfirmPasswordError(
      confirmPassword !== password ? '비밀번호가 일치하지 않습니다.' : ''
    );
  };

  // 회원가입 제출
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !idValid ||
      !id ||
      !password ||
      !name ||
      passwordError ||
      confirmPasswordError
    ) {
      toast.error('입력 정보를 확인해주세요.');
      return;
    }

    registerUser({ id, password, name });
  };

  return (
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
          onClick={() => checkIdDuplicate({ id })}
          disabled={isCheckingId}
        >
          {isCheckingId ? '확인 중...' : '중복확인'}
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
          <Register.ErrorMessage>{passwordError}</Register.ErrorMessage>
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
          <Register.ErrorMessage>{confirmPasswordError}</Register.ErrorMessage>
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
            특수문자를 제외한 3글자 이상을 입력해주세요.
          </Register.Label>
        </Register.FormSection>

        {/* 회원가입 및 취소 버튼 */}
        <Register.ButtonGroup>
          <Register.FormButton type='submit'>회원가입</Register.FormButton>
          <Register.CancelButton onClick={() => navigate('/login')}>
            취소
          </Register.CancelButton>
        </Register.ButtonGroup>
      </form>

      {/* 로그인 링크 */}
      <Register.Footer>
        이미 회원이라면?&nbsp;
        <Register.LoginLink onClick={() => navigate('/login')}>
          로그인하기
        </Register.LoginLink>
      </Register.Footer>
    </Register.RegisterPageLayout>
  );
};

export default RegisterPage;
