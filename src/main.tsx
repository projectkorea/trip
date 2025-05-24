import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router';
import SchedulePage from './pages/SchedulePage';
import CityPlanPage from './pages/CityPlanPage';
import AIResultPage from './pages/AIResultPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/schedule/cityplan" element={<CityPlanPage />} />
      <Route path="/schedule/result" element={<AIResultPage />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
