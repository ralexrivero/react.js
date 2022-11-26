import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { App, About, Contact, History } from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />}>
        <Route path='history' element={<History />} />
      </Route>
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>, document.getElementById('root')
);
