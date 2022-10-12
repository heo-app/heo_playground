import PostView from './postView';

import type { FC } from 'react';
import type { PostControllerProps } from './postTypes';

const PostController: FC<PostControllerProps> = (props) => {
  const { title } = props;

  return <PostView title={title} />;
};

export default PostController;
