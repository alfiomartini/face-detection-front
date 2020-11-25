import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
  const { imageURL } = props;
  return (
    <div className='face-image'>
       <img src={imageURL} alt=''/>
    </div>
  )
}

export default FaceRecognition;