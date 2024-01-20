import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import LoadingPage from './pages/LoadingPage';
import VideoInformation from './pages/VideoInformation';
import Home from './pages/Home';
import Stories from './pages/Stories';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Info from './pages/Info';
import Films from './pages/Films';
import Photo from './pages/Photo';
import LetsConnect from './pages/LetsConnect';
import PhotograpyInfomation from './pages/PhotograpyInfomation';
import BlogInformation from './pages/BlogInformation';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  const [viewloading, setViewLoading] = useState(false);
  const translation = useSelector((state) => state.translation);
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeChild(cursor);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setViewLoading(true);
    }, 3500);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />

      <div className="film-effect"></div>

      {!viewloading ? (
        <LoadingPage viewloading={viewloading} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route
            path="/about"
            element={<AboutMe translation={translation} />}
          />
          <Route
            path="/services"
            element={<Services translation={translation} />}
          />
          <Route
            path="/info"
            element={<Info translation={translation} />}
          />
          <Route
            path="/films"
            element={<Films translation={translation} />}
          />
          <Route
            path="/photo"
            element={<Photo translation={translation} />}
          />
          <Route
            path="/lets-connect"
            element={<LetsConnect translation={translation} />}
          />
          <Route
            path="/videoInformation/:id"
            element={<VideoInformation />}
          />
          <Route
            path="/photograpyInfomation/:id"
            element={<PhotograpyInfomation />}
          />
          <Route
            path="/blogInformation/:id"
            element={<BlogInformation translation={translation} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
