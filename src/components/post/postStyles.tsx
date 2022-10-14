import makeStyles from '@mui/styles/makeStyles';

import type { Theme } from '@mui/material';
import type { PostStylesProps } from './postTypes';

export const useStyles = makeStyles<Theme, PostStylesProps>((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // background: ({ type }): string => {
    //   return type === 'proffer' ? theme.palette.grey['200'] : theme.palette.grey['400'];
    // },
    border: '1px solid black',
    padding: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  profferCard: {
    background: theme.palette.grey['200'],
  },
  demandCard: {
    background: theme.palette.grey['400'],
  },
}));
