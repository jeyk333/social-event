import { Link } from 'react-router-dom';

import './style.css';
import MovieCard from '../../assets/images/movie-card.svg';

const LandingPage = () => {
  return (
    <div className='container'>
      <div className='image-container'>
        <img src={MovieCard} alt='Movie Card' />
        <Link to='/create'>
          <button className='create-button mobile'>🎉 Create my event</button>
        </Link>
      </div>
      <div className='contents'>
        <h3>
          Imagine if <span>Snapchat</span> had events.
        </h3>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
        <Link to='/create'>
          <button className='create-button web'>🎉 Create my event</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
