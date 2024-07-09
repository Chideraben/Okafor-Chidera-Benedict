import './index.css';
import Navbar from './Components/Navbar'
import Intro from './Components/Intro';
import MyProjects from './Components/MyProjects';
import {BrowserRouter as Router, Routes , Route, Navigate} from 'react-router-dom'
function App() {
  return (
    <div className="bg-[#231c35]">
      <Router>
        <Navbar/>
        <Intro />
        <MyProjects />
        <Routes>
          <Route 
         />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
