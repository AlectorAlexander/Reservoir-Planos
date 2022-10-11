/* eslint-disable react/jsx-filename-extension */
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Ofertas from './pages/Ofertas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/ofertas" element={<Ofertas />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
