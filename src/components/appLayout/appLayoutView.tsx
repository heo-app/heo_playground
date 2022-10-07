import type { FC } from 'react';
import type { AppLayoutViewProps } from './appLayoutTypes';

const AppLayoutView: FC<AppLayoutViewProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default AppLayoutView;
