import type { FC } from 'react';

import { useStyles } from './profileStyles';

import type { ProfileViewProps } from './profileTypes';

const ProfileView: FC<ProfileViewProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
    </div>
  );
};

export default ProfileView;
