import React from 'react';
import './ImageForm.css';

const ImageForm = () => {
  return (
    <div className='mt-4 image-form'>
      <p>Detect faces in your pictures. Give it a try!</p>
      <div className=''>
        <input className='' type="text"/>
        <button className='btn btn-dark btn-sm ml-2 py-1'> Detect</button>
      </div>
    </div>
  )
}

export default ImageForm;