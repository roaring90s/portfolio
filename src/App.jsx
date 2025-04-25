import React from "react";
import { Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Resume from './pages/Resume';
import About from './pages/About';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
