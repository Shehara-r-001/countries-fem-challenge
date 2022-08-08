import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Header from './Components/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/country/:name' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
