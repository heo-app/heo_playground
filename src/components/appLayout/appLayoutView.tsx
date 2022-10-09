import { forwardRef } from 'react';

import { APP_NAME, HEADER_HEIGHT } from 'src/chore/constants';
import { useStyles } from './AppLayoutStyles';
import { Drawer } from '../drawer';
import { Header } from '../header';

import type { FC } from 'react';
import type { AppLayoutViewProps } from './AppLayoutTypes';

const AppLayoutView: FC<AppLayoutViewProps> = forwardRef((props, forwardedRef) => {
  const { children, onHamburgerButtonClick } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header title={APP_NAME} height={HEADER_HEIGHT} onHamburgerButtonClick={onHamburgerButtonClick} />

      <div className={classes.headerAndContentContainer}>
        <Drawer ref={forwardedRef} />
        <div className={classes.contentContainer}>{children}</div>
      </div>
    </div>
  );
});

export default AppLayoutView;
