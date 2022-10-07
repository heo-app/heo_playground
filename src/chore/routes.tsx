import { Routes, Route } from 'react-router-dom';

import { AppLayout } from '../components/appLayout';
import { LoginPage } from '../components/login';
import { DashboardPage } from '../components/dashboard';

export const customRoutes = (
  <Routes>
    <Route
      path="/"
      element={
        <AppLayout>
          <DashboardPage />
        </AppLayout>
      }
    />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);
