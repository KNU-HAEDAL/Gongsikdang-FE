import { useNavigate } from 'react-router-dom';

const ReviewFoodPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Review Page</h1>
      <button onClick={() => navigate('/review/write')}>
        리뷰쓰기 페이지로 돌아가기
      </button>
    </div>
  );
};

export default ReviewFoodPage;
