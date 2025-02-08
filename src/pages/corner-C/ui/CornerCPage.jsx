import { useNavigate } from 'react-router-dom';

const CornerCPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>C Corner Page</h1>
      <button onClick={() => navigate('/corner/D')}>
        D코너 페이지로 돌아가기
      </button>
    </div>
  );
};

export default CornerCPage;
