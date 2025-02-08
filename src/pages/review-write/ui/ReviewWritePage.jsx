import { useNavigate } from 'react-router-dom';

const ReviewWritePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Review Write Page</h1>
      <button onClick={() => navigate('/mypage')}>마이페이지로 돌아가기</button>
    </div>
  );
};

export default ReviewWritePage;
