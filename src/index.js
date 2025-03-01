import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router';
import Schedule from './components/schedules/Schedule';
import CityPage from './components/schedules/CityPage';

import ScheduleButton from '@common/ScheduleButton';
import ScheduleManager from './components/ScheduleManager';
import TripDetails from './components/TripDetails';
import Tourguide from './components/schedules/Tourguide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<ScheduleButton />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/components/ScheduleManager" element={<ScheduleManager />} />
      <Route path="/schedule/citypage" element={<CityPage />} />
      <Route path="/components/TripDetails" element={<TripDetails />} />
      <Route path="/Tourguide" element={<Tourguide />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
