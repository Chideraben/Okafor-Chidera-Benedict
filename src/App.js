import './index.css';
import React, {useState} from 'react'
import Home from './Components/Home';
import MyProjects from './Components/MyProjects';
import MySkills from './Components/MySkills';
import {BrowserRouter as Router, Routes , Route, Navigate} from 'react-router-dom'
import Footer from './Components/Footer'
import Service from './Components/Service';
import Navbar from './Components/Navbar';

function App() {
 
  return (
    <main className=''>
     
        
        <Home/>
        <Service/>
        <MySkills/>
        <MyProjects  />
        <Footer/>
         <Navbar/>
    </main>
  );
}

export default App;
