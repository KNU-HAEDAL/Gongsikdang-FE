import { useNavigate } from 'react-router-dom';

import * as HeaderStyles from './Header.style';

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <HeaderStyles.HeaderLayout>
      <HeaderStyles.Wrapper>
        <HeaderStyles.Button onClick={() => navigate(-1)}>
          <HeaderStyles.ArrowIcon />
        </HeaderStyles.Button>
        <HeaderStyles.TitleText>{title}</HeaderStyles.TitleText>
        <HeaderStyles.Button onClick={() => navigate('/mypage')}>
          <HeaderStyles.MypageIcon />
        </HeaderStyles.Button>
      </HeaderStyles.Wrapper>
    </HeaderStyles.HeaderLayout>
  );
};

export default Header;
