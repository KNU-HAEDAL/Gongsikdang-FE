import { useNavigate } from 'react-router-dom';

const CornerDPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>C Corner Page</h1>
      <button onClick={() => navigate('/payment')}>
        결제 페이지로 돌아가기
      </button>
    </div>
  );
};

export default CornerDPage;
