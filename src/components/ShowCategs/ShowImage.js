import React from 'react';
import PropTypes from 'prop-types';


export const ShowImage = ({img, type, fnSelect}) => {
  const fnSelectImgHandler= (e) => {fnSelect({...img});}
  return <img src={(type==='large')?img.largeImage:img.shortImage} alt={img.id} className= {`img-${type}`} onClick={fnSelectImgHandler}/>;
}

ShowImage.propTypes = {
  fnSelect: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired
}

