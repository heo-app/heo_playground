import type { FC } from 'react';
import type { DrawerViewProps } from './DrawerTypes';

const DrawerView: FC<DrawerViewProps> = (props) => {
  const { isDrawerOpen } = props;

  return (
    <div>
      <p>hi im drawer {String(isDrawerOpen)} </p>
      <p>hi im drawer {String(isDrawerOpen)} </p>
      <p>hi im drawer {String(isDrawerOpen)} </p>
      <p>hi im drawer {String(isDrawerOpen)} </p>
      <p>hi im drawer {String(isDrawerOpen)} </p>
      <p>hi im drawer {String(isDrawerOpen)} </p>
      <p>hi im drawer {String(isDrawerOpen)} </p>
      <p>hi im drawer {String(isDrawerOpen)} </p>
      <p>hi im drawer {String(isDrawerOpen)} </p>
      <p>hi im drawer {String(isDrawerOpen)} </p>
    </div>
  );
};

export default DrawerView;
