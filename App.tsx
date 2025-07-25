
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* Fallback route can be added here if needed */}
        <Route path="*" element={<HomePage />} /> 
      </Route>
    </Routes>
  );
};

export default App;
