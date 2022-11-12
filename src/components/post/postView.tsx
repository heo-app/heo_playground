import type { FC } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import { useStyles } from './postStyles';

import type { PostViewProps } from './postTypes';

const PostView: FC<PostViewProps> = (props) => {
  const { title, description, type, images } = props;
  const classes = useStyles({ type });

  return (
    <div className={`${classes.container} ${type === 'proffer' ? classes.profferCard : classes.demandCard}`}>
      <div
        style={{
          top: 0,
          width: '25%',
          height: 30,
          background: 'orange',
          border: '1px solid gray',
          borderRadius: '0px 15px 50px 0px',
        }}
      >
        <h4
          style={{
            fontFamily: 'dyna',
            paddingLeft: 5,
          }}
        >
          {type}
        </h4>
      </div>

      <h5
        style={{
          marginTop: 5,
          paddingLeft: 5,
          alignSelf: 'center',
        }}
      >
        {title}
      </h5>

      {images && (
        <SimpleImageSlider
          width={600}
          height={300}
          images={images}
          showBullets={true}
          showNavs={true}
          style={{ alignSelf: 'center', marginTop: 10 }}
          autoPlay
        />
      )}

      <p
        style={{
          marginTop: 10,
          alignSelf: 'center',
          paddingBottom: 10,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default PostView;
