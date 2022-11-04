import makeStyles from '@mui/styles/makeStyles';

import headerImage from '../../images/header-image.jpeg';

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
    background: '#202124',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
    width: '90%',
    height: '90%',
    flexDirection: 'column',
    padding: 10,
    border: '1px solid gray',
    borderRadius: 5,
  },
  header: {
    display: 'flex',
    height: '180px',
    flexDirection: 'column',
    background: 'gray',
    backgroundImage: `url("${headerImage}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}));
