import makeStyles from '@mui/styles/makeStyles';

import type { Theme } from '@mui/material';
import type { DrawerStylesProps } from './DrawerTypes';

export const useStyles = makeStyles<Theme, DrawerStylesProps>(() => ({
  openDrawerContainer: {
    width: ({ openDrawerWidth }): number => openDrawerWidth,
    display: 'flex',
    flexDirection: 'column',
    background: 'lightGray',
    height: '100vh',
  },

  closeDrawerContainer: {
    width: ({ closeDrawerWidth }): number => closeDrawerWidth,
    display: 'flex',
    flexDirection: 'column',
    background: 'gray',
    height: '100vh',
  },
}));
