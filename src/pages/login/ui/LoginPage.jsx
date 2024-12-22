import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Login from './LoginPage.style';
import { fetchInstance } from '@/shared/instance/Instance';

const LoginPage = ({ onLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetchInstance.post('/user/login', {
        id,
        password,
      });
      if (response.data && response.data.message === 'Login successful') {
        alert('Login successful!');
        sessionStorage.setItem('token', response.data.token); // JWT 토큰 저장
        onLogin();
        navigate('/ChooseRestaurant'); // 식당 선택 페이지로 이동
      } else {
        alert(
          response.data.message || 'Invalid credentials, please try again.'
        );
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Login.LoginPageLayout>
      <form onSubmit={handleSubmit}>
        <Login.LogoCircle>
          <Login.SubLogoCircle />
        </Login.LogoCircle>
        <Login.LoginTitle>환영합니다!</Login.LoginTitle>
        <Login.SubTitle>학교 식당 예약 사이트 입니다</Login.SubTitle>
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
        <Login.SignUpButton
          className='signup-button'
          onClick={() => navigate('/register')}
        >
          회원가입
        </Login.SignUpButton>
      </form>
    </Login.LoginPageLayout>
  );
};

export default LoginPage;
