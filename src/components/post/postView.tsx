import { Button } from '@mui/material';
import type { FC } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import { useStyles } from './postStyles';

import type { PostViewProps } from './postTypes';

const PostView: FC<PostViewProps> = (props) => {
  const { title, description, type, images } = props;
  const classes = useStyles({ type });

  return (
    <div className={`${classes.container} ${type === 'proffer' ? classes.profferCard : classes.demandCard}`}>
      <div className={classes.containerText}>
        <h4 className={classes.textStyle}>{type}</h4>
      </div>
      <h5 className={classes.titleStyle}>{title}</h5>

      {images && (
        <SimpleImageSlider
          width={600}
          height={300}
          images={images}
          showBullets={true}
          showNavs={true}
          style={{ alignSelf: 'center', marginTop: 10 }}
          // autoPlay
        />
      )}

      <p className={classes.descriptionStyle}>{description}</p>

      <Button variant="outlined" color="success" className={classes.buttonStyle}>
        Im interested
      </Button>
    </div>
  );
};

export default PostView;
