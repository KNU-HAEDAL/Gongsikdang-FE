import { useNavigate } from 'react-router-dom';

const CornerDPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>C Corner Page</h1>
      <button onClick={() => navigate('/payment')}>결제페이지</button>
      <button onClick={() => navigate('/review/food')}>리뷰보기</button>
    </div>
  );
};

export default CornerDPage;
