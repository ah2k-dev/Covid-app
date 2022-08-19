import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Global from './components/Global.js';
import Countries from './components/Countries.js';
import Header from './components/Header.js';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global" element={<Global />} />
          <Route path="/countries" element ={<Countries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
