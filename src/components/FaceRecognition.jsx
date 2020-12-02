import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
  const { imageURL, box } = props;
  // console.log('face', box.top, box.right, box.left, box.bottom);
  return (
    <div className='face-image mt-3'>
      <div className='image-box'>
        <img src={imageURL} alt='' id= 'inputImg' />
        <div className='bounding-box' 
          style={{top:box.top, right:box.right, left:box.left, bottom:box.bottom }}>
        </div>
      </div>
    </div>
  )
}

export default FaceRecognition;