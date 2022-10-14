import { FC } from 'react';
import { useTheme } from '@mui/material/styles';

import dashboardImage from '../../images/heo-fun.gif';

import type { DashboardViewProps } from './DashboardTypes';
import { Posts } from '../posts';

const DashboardView: FC<DashboardViewProps> = (props) => {
  const theme = useTheme();

  return (
    <div style={{ display: 'flex', flex: 1 }}>
      {/* <img src={dashboardImage} alt="" height={300} width={400} /> */}
      <Posts />
    </div>
  );
};

export default DashboardView;
