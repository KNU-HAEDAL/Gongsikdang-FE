import { useNavigate } from 'react-router-dom';

const SelectCornerPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Select Corner Page</h1>
      <button onClick={() => navigate('/corner/A')}>A코너</button>
      <button onClick={() => navigate('/corner/B')}>B코너</button>
      <button onClick={() => navigate('/corner/C')}>C코너</button>
      <button onClick={() => navigate('/corner/D')}>D코너</button>
    </div>
  );
};

export default SelectCornerPage;
