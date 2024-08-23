/* eslint-disable */
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TermsPage from './pages/terms';
import AdminTermsPage from './pages/admin/terms';

const AppRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route index element={<TermsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/admin/terms" element={<AdminTermsPage />} />
        {/* Redirect any unknown paths to the main terms page */}
        <Route path="*" element={<Navigate to="/terms" />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
