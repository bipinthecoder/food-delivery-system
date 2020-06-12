import React from 'react';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./Components/FontAwesomeIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Routes from './Components/Routes/Routes';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
