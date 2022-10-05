import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginView from './LoginView';

const LoginController = (): ReactElement => {
  const navigate = useNavigate();

  const onLoginButtonClick = (): void => {
    navigate('/');
  };

  return <LoginView onLoginButtonClick={onLoginButtonClick} />;
};

export default LoginController;
