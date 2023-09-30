import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Services from './Components/Services'; 
import Industries from './Components/Industries';
import ContactForm from './Components/Form';
import Button from '@mui/material/Button';

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/industries' element={<Industries />}></Route>
        <Route path='/ContactForm' element={<ContactForm/>}></Route>
        </Routes>
        </BrowserRouter>
  );
};

export default App;
//comment


