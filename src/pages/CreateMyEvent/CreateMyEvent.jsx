import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '../../components/TextField';
import ImageUploader from '../../components/ImageUploaded';
import './style.css';

const CreateMyEvent = () => {
  const [eventName, setEventName] = useState('');
  const [hostName, setHostName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [eventPhoto, setEventPhoto] = useState();
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handlePhotoUpload = (e) => {
    let file = e.target.files[0];
    setEventPhoto(file);
    setPreviewPhoto(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (eventName && hostName && startTime && endTime && location) {
      let values = {
        eventName,
        hostName,
        startTime,
        endTime,
        location,
        eventPhoto,
        previewPhoto,
      };
      localStorage.setItem('event', JSON.stringify(values));
      navigate('/event');
    }
  };

  return (
    <div className='form-container'>
      <form className='form-contents' onSubmit={handleSubmit}>
        <h2>Create your event</h2>
        <div className='flex-container'>
          <div className='left-content'>
            <TextField
              id={'eventName'}
              name={'eventName'}
              value={eventName}
              label={'Event Name'}
              required
              handleChange={setEventName}
              isError={isSubmitted && !eventName && 'Event Name is required'}
            />
            <TextField
              id={'hostName'}
              required
              name={'hostName'}
              value={hostName}
              label={'Host Name'}
              handleChange={setHostName}
              isError={isSubmitted && !hostName && 'Host Name is required'}
            />
            <TextField
              value={startTime}
              handleChange={setStartTime}
              label={'Start Time'}
              type='datepicker'
              isError={
                isSubmitted && !startTime && 'Start Date and Time is required'
              }
            />
            <TextField
              value={endTime}
              handleChange={setEndTime}
              label={'End Time'}
              type='datepicker'
              isError={
                isSubmitted && !endTime && 'End Date and Time is required'
              }
            />

            <TextField
              id={'location'}
              name={'location'}
              value={location}
              label={'Location'}
              handleChange={setLocation}
              className='datepicker'
              isError={isSubmitted && !location && 'Location is required'}
            />
          </div>
          <div className='right-content'>
            <ImageUploader
              previewPhoto={previewPhoto}
              name={'eventPhoto'}
              handlePhotoUpload={handlePhotoUpload}
            />
          </div>
        </div>
        <div className='button-wrapper'>
          <button className='next-button' type='submit'>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMyEvent;
