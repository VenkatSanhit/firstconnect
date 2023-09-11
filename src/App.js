import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Services from './Components/Services'; 
import Industries from './Components/Industries';
import Button from '@mui/material/Button';


const App = () => {
  return (
    <div className="app" >
      {/* <Navbar /> */}
      {/* <Homepage /> */}
      <Services />  
    {/*<Industries/>*/}
      {/* Your content here */}
    </div>
  );
};

export default App;



