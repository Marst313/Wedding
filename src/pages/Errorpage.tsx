import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/name/user');
  }, []);

  return <div>Errorpage</div>;
};
export default Errorpage;
