import { useState, forwardRef, useImperativeHandle } from 'react';

import DrawerView from './DrawerView';

import type { FC } from 'react';
import type { DrawerControllerProps, ToggleDrawer } from './DrawerTypes';

const DrawerController: FC<DrawerControllerProps> = forwardRef((props, forwarderRef) => {
  const { openDrawerWidth, closeDrawerWidth } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // this hook will fill forwarded ref with custom local functions
  useImperativeHandle(forwarderRef, () => ({
    toggleDrawer,
  }));

  /**
   * open or close drawer
   * @function toggleDrawer
   * @returns {void}
   */
  const toggleDrawer: ToggleDrawer = (): void => {
    setIsDrawerOpen((prevDrawerState) => !prevDrawerState);
  };

  return (
    <DrawerView
      isDrawerOpen={isDrawerOpen}
      openDrawerWidth={openDrawerWidth}
      closeDrawerWidth={closeDrawerWidth}
    />
  );
});

export default DrawerController;
