import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Services from './Components/Services'; 
import Industries from './Components/Industries';
import Button from '@mui/material/Button';
import ContactForm from './Components/Form'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import firebase from "firebase/app";
// import "firebase/firestore";

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCyVmjtAeY92Es0_17PGUc_kU_823vy8ws",
//   authDomain: "firstconnect-ccb0b.firebaseapp.com",
//   projectId: "firstconnect-ccb0b",
//   storageBucket: "firstconnect-ccb0b.appspot.com",
//   messagingSenderId: "827266575549",
//   appId: "1:827266575549:web:4b680c363794f5f35d5bd4",
//   measurementId: "G-6TN0QWCPX4"
// };
// firebase.initializeApp(firebaseConfig);

// // This prevents a warning message for changes to firestore timestamp syntax in the console
// // Firestore is still in Beta - in the future this won't be necessary
// const firestore = firebase.firestore();
// const settings = { /* your settings... */ timestampsInSnapshots: true };
// firestore.settings(settings);

const App = () => {
  return (

    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/industries' element={<Industries />}></Route>

        </Routes>
        </BrowserRouter>
  );
};

export default App;
//comment


