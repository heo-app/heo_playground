import makeStyles from '@mui/styles/makeStyles';

import type { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
}));
