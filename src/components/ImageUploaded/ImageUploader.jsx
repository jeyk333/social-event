import { TbCameraPlus } from 'react-icons/tb';

import './style.css';

const ImageUploader = ({ previewPhoto, name, handlePhotoUpload }) => {
  return (
    <>
      <label htmlFor={name}>
        <div className='uploader-container'>
          {previewPhoto ? (
            <img src={previewPhoto} alt='Preview' />
          ) : (
            <div className='no-image'>
              <TbCameraPlus size={100} />
              <h3>Choose a Photo</h3>
              <p>(optional)</p>
            </div>
          )}
        </div>
        <input
          id={name}
          type='file'
          className='hidden'
          onChange={handlePhotoUpload}
        />
      </label>
    </>
  );
};

export default ImageUploader;
