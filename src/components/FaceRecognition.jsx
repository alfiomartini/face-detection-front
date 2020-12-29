import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
  const { imageURL, boxes } = props;
  const boxList = boxes.map((box, index) => {
      return (
        <div className='bounding-box' key={index}
          style={{top:box.top, right:box.right, left:box.left, bottom:box.bottom }}>
        </div>
      )
  });
  return (
    <div className='face-image mt-3'>
      <div className='image-box'>
        <img src={imageURL} alt='' id= 'inputImg' />
        <div>{boxList}</div>
      </div>
    </div>
  )
}

export default FaceRecognition;