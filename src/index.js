import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../src/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import App from './App'
import Default from './components/Default';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='*' element={<Default />}></Route>
      </Routes>
  </BrowserRouter>
);
