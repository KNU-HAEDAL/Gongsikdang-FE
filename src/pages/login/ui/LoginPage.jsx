import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginAPI } from '../apis';
import * as Login from './LoginPage.style';
import { useMutation } from '@tanstack/react-query';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { mutate: loginData } = useMutation({
    mutationFn: loginAPI,
    onSuccess: (response) => {
      alert('로그인 성공!');
      sessionStorage.setItem('token', response.data.token);
      navigate('/corner');
    },
    onError: () => {
      alert('로그인 실패');
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();
    loginData({ id, password });
  };

  return (
    <Login.LoginPageLayout>
      <form onSubmit={(e) => onSubmit(e)}>
        <Login.LogoCircle>
          <Login.SubLogoCircle>
            <span className='yellow'>공</span>
            <span className='blue'>식당</span>
          </Login.SubLogoCircle>
        </Login.LogoCircle>
        <Login.LoginTitle>환영합니다!</Login.LoginTitle>
        <Login.SubTitle>공식당 예약 키오스크 서비스 입니다.</Login.SubTitle>
        <Login.LoginBox>
          <Login.LoginInput
            type='text'
            name='id'
            placeholder='아이디를 입력하세요'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Login.LoginInput
            type='password'
            name='password'
            placeholder='비밀번호를 입력하세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Login.LoginButton type='submit'>로그인</Login.LoginButton>
        </Login.LoginBox>
        <Login.SignUpWrapper>
          아직 회원이 아니라면?&nbsp;
          <Login.SignUpButton onClick={() => navigate('/register')}>
            회원가입하기
          </Login.SignUpButton>
        </Login.SignUpWrapper>
      </form>
    </Login.LoginPageLayout>
  );
};

export default LoginPage;
