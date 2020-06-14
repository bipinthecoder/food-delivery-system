import React from 'react';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./Components/FontAwesomeIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Routes from './Components/Routes/Routes';
import AppProvider from "./Utils/AppProvider.jsx"


function App() {
  return (
    <AppProvider>
      <div className="App">
        <NavBar/>
        <Routes/>
        <Footer/>
      </div>
    </AppProvider>
  );
}

export default App;
