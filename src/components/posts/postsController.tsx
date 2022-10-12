import PostsView from './postsView';

import type { FC } from 'react';
import type { PostsControllerProps } from './postsTypes';
import type { PostControllerProps } from '../post/postTypes';

const PostsController: FC<PostsControllerProps> = (props) => {
  const posts: PostControllerProps[] = [
    { title: 'card one', description: 'hi', type: 'proffer' },
    { title: 'card two', description: 'bye', type: 'demand' },
    { title: 'card three', description: 'hi hi', type: 'proffer' },
    { title: 'card three', description: 'bye bye', type: 'demand' },
  ];

  return <PostsView posts={posts} />;
};

export default PostsController;
