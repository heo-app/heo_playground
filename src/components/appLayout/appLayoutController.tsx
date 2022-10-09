import { FC, ForwardedRef, memo, useRef } from 'react';

import AppLayoutView from './AppLayoutView';

import type { AppLayoutControllerProps } from './AppLayoutTypes';
import type { ToggleDrawer } from '../drawer/DrawerTypes';

const appLayoutController: FC<AppLayoutControllerProps> = (props) => {
  const { children } = props;

  const drawerRef = useRef<{ toggleDrawer: ToggleDrawer }>();

  const onHamburgerButtonClick: ToggleDrawer = (): void => {
    // here has been used optional chaining because of first render delay and it doesn't effect in user experience
    drawerRef.current?.toggleDrawer();
  };

  return (
    <AppLayoutView
      children={children}
      onHamburgerButtonClick={onHamburgerButtonClick}
      ref={drawerRef as ForwardedRef<{ toggleDrawer: ToggleDrawer }>}
    />
  );
};

// true in the next line will cause to always memorize this component and render it only one time
export default memo(appLayoutController, () => true);
