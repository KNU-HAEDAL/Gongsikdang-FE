import * as Common from '@/shared/styles';

const ButtonsBox = ({ navigate }) => {
  const handleBack = () => navigate(-1);
  const handleHome = () => navigate('/chooseRestaurant');

  return (
    <Common.TopButtons>
      <Common.TopButton onClick={handleBack}>뒤로</Common.TopButton>
      <Common.TopButton onClick={handleHome}>홈</Common.TopButton>
    </Common.TopButtons>
  );
};

export default ButtonsBox;
