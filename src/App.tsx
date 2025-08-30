import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ImpactPage from './pages/ImpactPage';
import ContactPage from './pages/ContactPage';
import InsightsPage from './pages/InsightsPage';
import BlogPostPage from './pages/BlogPostPage';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;