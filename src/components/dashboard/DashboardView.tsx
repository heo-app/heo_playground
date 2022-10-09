import { FC } from 'react';
import { useTheme } from '@mui/material/styles';

import dashboardImage from '../../images/heo-fun.gif';

import type { DashboardViewProps } from './DashboardTypes';

const DashboardView: FC<DashboardViewProps> = (props) => {
  const theme = useTheme();

  return (
    <div>
      {/* <img src={dashboardImage} alt="" height={300} width={400} /> */}
      dashboard
    </div>
  );
};

export default DashboardView;
