import AbcIcon from '@mui/icons-material/Abc';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

import { useStyles } from './DrawerStyles';

import type { FC } from 'react';
import type { DrawerViewProps } from './DrawerTypes';

const DrawerView: FC<DrawerViewProps> = (props) => {
  const { isDrawerOpen, openDrawerWidth = 240, closeDrawerWidth = 40 } = props;

  const classes = useStyles({ openDrawerWidth, closeDrawerWidth });

  return (
    <div className={isDrawerOpen ? classes.openDrawerContainer : classes.closeDrawerContainer}>
      <AbcIcon />
      <AccessibilityNewIcon />
      <AccessibilityIcon />
    </div>
  );
};

export default DrawerView;
