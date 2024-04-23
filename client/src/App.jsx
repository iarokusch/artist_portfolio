import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Other from "./components/Other";
import Projects from "./components/Projects";
import Works from "./components/Works";
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/other" element={<Other />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
