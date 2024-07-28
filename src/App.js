import './index.css';
import React, {useState} from 'react'
import ToggleSwitch from './Components/ToggleSwitch'
import Home from './Components/Home';
import MyProjects from './Components/MyProjects';
import Contact from './Components/Contact';
import MySkills from './Components/MySkills';
import {BrowserRouter as Router, Routes , Route, Navigate} from 'react-router-dom'
import Footer from './Components/Footer'
import Service from './Components/Service';
import Navbar from './Components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };
  return (
    <main className={darkMode ? 'dark-mode' : 'app'}>
     
        <ToggleSwitch 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}/>
        <Home/>
        <Service/>
        <MySkills/>
        <MyProjects  />
        <Contact />
        <Footer/>
         <Navbar/>
    </main>
  );
}

export default App;
