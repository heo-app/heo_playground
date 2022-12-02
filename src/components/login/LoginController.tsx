import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginView from './LoginView';
import { getProfile as getProfileAction } from '../profile/action';

const LoginController = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToHomepage = (): void => {
    navigate('/');
  };

  const onLoginButtonClick = (): void => {
    //todo this is fake login , and just get fake profile
    dispatch(getProfileAction({ successCallback: navigateToHomepage }) as any); //fixme any types
  };

  return <LoginView onLoginButtonClick={onLoginButtonClick} />;
};

export default LoginController;
