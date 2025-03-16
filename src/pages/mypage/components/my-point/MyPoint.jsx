import { useNavigate } from 'react-router-dom';

import { useGetPoint } from '../../hooks';
import * as Mypage from '../../ui/Mypage.style';

export const MyPoint = () => {
  const navigate = useNavigate();
  const { data: pointData } = useGetPoint();

  return (
    <Mypage.Section>
      <Mypage.Title>내 포인트</Mypage.Title>
      <Mypage.InfoBox>
        <Mypage.Wrapper>
          <Mypage.TextBox>
            <Mypage.BoldText>{pointData || 0}</Mypage.BoldText>
            <Mypage.BoldText>점</Mypage.BoldText>
            <p>&nbsp;사용 가능합니다.</p>
          </Mypage.TextBox>
          <Mypage.RedButton onClick={() => navigate('/mypage/point')}>
            충전하기
          </Mypage.RedButton>
        </Mypage.Wrapper>
      </Mypage.InfoBox>
    </Mypage.Section>
  );
};
