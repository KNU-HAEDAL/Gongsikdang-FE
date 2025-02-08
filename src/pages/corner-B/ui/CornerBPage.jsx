import { useNavigate } from 'react-router-dom';

const CornerBPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>B Corner Page</h1>
      <button onClick={() => navigate('/corner/C')}>
        C코너 페이지로 돌아가기
      </button>
    </div>
  );
};

export default CornerBPage;
