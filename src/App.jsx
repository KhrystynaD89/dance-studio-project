import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Schedule from './components/Schedule';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/schedule" element={<Schedule />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
