import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { useSelector } from 'react-redux';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import LoadingPage from './pages/LoadingPage';

const Home = lazy(() => import('./pages/Home'));
const Stories = lazy(() => import('./pages/Stories'));
const VideoInformation = lazy(() =>
  import('./pages/VideoInformation')
);
const PhotograpyInfomation = React.lazy(() =>
  import('./pages/PhotograpyInfomation')
);
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Services = lazy(() => import('./pages/Services'));
const Info = lazy(() => import('./pages/Info'));
const Films = lazy(() => import('./pages/Films'));
const Photo = lazy(() => import('./pages/Photo'));
const LetsConnect = lazy(() => import('./pages/LetsConnect'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
    }, 3000);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />

      <div className="film-effect"></div>

      {!viewloading ? (
        <LoadingPage viewloading={viewloading} />
      ) : (
        <Suspense fallback={null}>
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
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
