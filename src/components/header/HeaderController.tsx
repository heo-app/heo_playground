import { useNavigate } from 'react-router-dom';

import HeaderView from './HeaderView';

import type { FC } from 'react';
import type { HeaderControllerProps } from './HeaderTypes';

const HeaderController: FC<HeaderControllerProps> = (props) => {
  const navigate = useNavigate();

  const onProfileIconClick = (): void => {
    navigate('/profile', { replace: true });
  };

  const onLogoutClick = (): void => {
    navigate('/login', { replace: true });
  };

  return <HeaderView {...props} onProfileIconClick={onProfileIconClick} onLogoutClick={onLogoutClick} />;
};

export default HeaderController;
