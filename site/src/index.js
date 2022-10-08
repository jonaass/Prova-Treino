import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Acai from './pages/acai';
import Signo from './pages/signo';
import Grama from './pages/grama';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/acai' element={<Acai />} />
      <Route path='/signo' element={<Signo />} />
      <Route path='/grama' element={<Grama />} /> 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
