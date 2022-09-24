import { BrowserRouter, Routes as Routing, Route } from 'react-router-dom';

import CreateMyEvent from '../pages/CreateMyEvent';
import LandingPage from '../pages/LandingPage';
import EventPage from '../pages/EventPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Routing>
        <Route path='/' element={<LandingPage />} />
        <Route path='/create' element={<CreateMyEvent />} />
        <Route path='/event' element={<EventPage />} />
      </Routing>
    </BrowserRouter>
  );
};

export default Routes;
