import { useNavigate } from 'react-router-dom';

const SelectCornerPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Select Corner Page</h1>
      <button onClick={() => navigate('/corner/A')}>
        A코너 페이지로 돌아가기
      </button>
    </div>
  );
};

export default SelectCornerPage;
