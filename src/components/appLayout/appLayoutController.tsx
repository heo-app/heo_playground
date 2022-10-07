import { FC, memo } from 'react';
import type { AppLayoutControllerProps } from './appLayoutTypes';

import AppLayoutView from './appLayoutView';

const appLayoutController: FC<AppLayoutControllerProps> = (props) => {
  const { children } = props;

  return <AppLayoutView children={children} />;
};

// true in the next line will cause to always memorize this component and render it only one time
export default memo(appLayoutController, () => true);
