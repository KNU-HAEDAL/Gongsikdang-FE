import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchInstance } from '@/shared/instance/Instance';

import * as Login from './LoginPage.style';

const LoginPage = ({ onLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetchInstance.post(
        'https://gongsikdang-be-production.up.railway.app/user/login',
        {
          id,
          password, // ✅ name, point 제거
        }
      );

      if (response.data && response.data.token) {
        alert('Login successful!');
        sessionStorage.setItem('token', response.data.token); // ✅ JWT 저장
        onLogin();
        navigate('/ChooseRestaurant');
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

  const handleNavigation = (path) => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    navigate(path);
  };

  return (
    <Login.LoginPageLayout>
      <form onSubmit={handleSubmit}>
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
          아직 회원이 아니라면?{' '}
          <Login.SignUpButton onClick={() => navigate('/register')}>
            회원가입하기
          </Login.SignUpButton>
        </Login.SignUpWrapper>
        <button onClick={() => handleNavigation('/mypage')}>마이페이지</button>
        <button onClick={() => handleNavigation('/corner')}>코너선택</button>
      </form>
    </Login.LoginPageLayout>
  );
};

export default LoginPage;
