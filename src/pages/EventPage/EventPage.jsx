import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import CakeImage from '../../assets/images/cake.png';
import Calendar from '../../assets/images/calendar.svg';
import Location from '../../assets/images/location.svg';
import './style.css';

const EventPage = () => {
  const [eventDetails, setEventDetails] = useState();

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('event'));
    if (items) {
      setEventDetails(items);
    }
  }, []);

  return (
    <div className='event-container'>
      <div className='event-details'>
        <div className='left-data-content'>
          <h3>{eventDetails?.eventName}</h3>
          <p>
            <span>Hosted by</span> {eventDetails?.hostName}
          </p>
          <div className='details'>
            <img src={Calendar} alt='Time' />
            <p>
              <strong>
                {dayjs(eventDetails?.startTime).format('DD MMMM HH:MMA')}
              </strong>{' '}
              to{' '}
              <strong>
                {dayjs(eventDetails?.endTime).format('DD MMMM HH:MMA')}
              </strong>
            </p>
          </div>
          <div className='details'>
            <img src={Location} alt='Location' />
            <p>
              <span>Street name</span>
              {eventDetails?.location}
            </p>
          </div>
        </div>
        <div className='right-data-content'>
          <img
            src={
              eventDetails?.previewPhoto ? eventDetails.previewPhoto : CakeImage
            }
            alt='event'
          />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
