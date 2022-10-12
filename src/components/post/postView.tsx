import type { FC } from 'react';
import type { PostViewProps } from './postTypes';

const PostView: FC<PostViewProps> = (props) => {
  const { title } = props;

  return (
    <div>
      <p> {title}</p>
      <p> {title}</p>
      <p> {title}</p>
      <p> {title}</p>
    </div>
  );
};

export default PostView;
