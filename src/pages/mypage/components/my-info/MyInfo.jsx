import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { Spinner } from '@/shared';

import { useGetName } from '../../hooks';
import * as Mypage from '../../ui/Mypage.style';

export const MyInfo = () => {
  const navigate = useNavigate();

  const { data: nameData, isPending } = useGetName();

  console.log(nameData);
  const onClickLogout = () => {
    toast.success('로그아웃 되었습니다.');
    sessionStorage.removeItem('token');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <Mypage.Section>
      <Mypage.Title>내정보</Mypage.Title>
      <Mypage.InfoBox>
        <Mypage.Wrapper>
          <Mypage.TextBox>
            {isPending ? (
              <Spinner />
            ) : (
              <>
                <Mypage.BoldText>{nameData}</Mypage.BoldText>
                <p>님 반갑습니다.</p>
              </>
            )}
          </Mypage.TextBox>
          <Mypage.RedButton onClick={onClickLogout}>로그아웃</Mypage.RedButton>
        </Mypage.Wrapper>
      </Mypage.InfoBox>
    </Mypage.Section>
  );
};
