import { useNavigate } from 'react-router-dom';

const CornerAPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>A Corner Page</h1>
      <button onClick={() => navigate('/corner/B')}>
        B코너 페이지로 돌아가기
      </button>
    </div>
  );
};

export default CornerAPage;
