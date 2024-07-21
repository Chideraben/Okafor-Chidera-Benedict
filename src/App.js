import './index.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About'
import MyProjects from './Components/MyProjects';
import Contact from './Components/Contact';
import MySkills from './Components/MySkills';
import {BrowserRouter as Router, Routes , Route, Navigate} from 'react-router-dom'
import Footer from './Components/Footer'
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };
  return (
    <main className={darkMode ? 'dark-mode' : 'app'}>
      <Router>
        <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}/>
        <Home/>
        <MySkills/>
        <MyProjects  />
        <Contact />
        <Footer/>
        <Routes>
          <Route 
         />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
