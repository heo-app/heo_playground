import makeStyles from '@mui/styles/makeStyles';

import type { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>(() => ({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
    width: '90%',
    height: '90%',
    flexDirection: 'column',
    padding: 10,
    border: '1px solid gray',
  },
}));
