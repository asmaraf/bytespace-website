import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import CreatorPage from './pages/CreatorPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/courses" element={<SearchPage />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/creator" element={<CreatorPage />} />
        <Route path="/creators" element={<CreatorPage />} />
        <Route path="/creator/:id" element={<CreatorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
