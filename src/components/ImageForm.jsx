import React from 'react';
import './ImageForm.css';

const ImageForm = (props) => {
  const { onInputChange, onSubmit } = props;
  return (
    <div className='mt-4 image-form'>
      <p>Detect faces in your pictures. Give it a try!</p>
      <div className=''>
        <input className='' type="text" onChange = {onInputChange}/>
        <button className='btn btn-dark btn-sm ml-2 py-1' onClick={onSubmit}> Detect</button>
      </div>
    </div>
  )
}

export default ImageForm;