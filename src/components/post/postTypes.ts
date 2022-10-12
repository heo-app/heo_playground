export type postType = 'proffer' | 'demand';

export interface PostStylesProps {
  type: postType;
}

export interface PostControllerProps {
  title: string;
  description: string;
  type: postType;
  images?: Array<string>;
}

export interface PostViewProps {
  title: string;
  description: string;
  type: postType;
  images?: Array<string>;
}
