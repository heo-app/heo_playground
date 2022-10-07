import type { FC } from 'react';
import { Drawer } from '../drawer';
import { Header } from '../header';
import type { AppLayoutViewProps } from './appLayoutTypes';

const AppLayoutView: FC<AppLayoutViewProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Drawer />
      {children}
    </div>
  );
};

export default AppLayoutView;
