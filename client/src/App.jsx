import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from './components/Home';
import PhotoDetail from './components/PhotoDetail'; // Імпорт компонента

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photo/:id" element={<PhotoDetail />} /> {/* Додано маршрут */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
