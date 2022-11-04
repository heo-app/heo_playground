import type { FC } from 'react';

import { useStyles } from './profileStyles';

import type { ProfileViewProps } from './profileTypes';

const ProfileView: FC<ProfileViewProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.header}>
          <img></img>
        </div>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>
    </div>
  );
};

export default ProfileView;
