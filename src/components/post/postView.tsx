import type { FC } from 'react';

import { useStyles } from './postStyles';

import type { PostViewProps } from './postTypes';

const PostView: FC<PostViewProps> = (props) => {
  const { title, description, type, images } = props;
  const classes = useStyles({ type });

  return (
    <div className={classes.container}>
      <p> {title}</p>
      <p> {description}</p>
    </div>
  );
};

export default PostView;
