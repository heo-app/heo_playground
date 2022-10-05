import { Routes, Route } from 'react-router-dom';

import { LoginPage } from '../components/login';
import { DashboardPage } from '../components/dashboard';

export const customRoutes = (
  <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);
