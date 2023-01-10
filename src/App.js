import './App.css';
import React from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Homepage from './Homepage/Homepage'
// import Post from './Postfeed/Post';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="app">

      <Router>
        
        
        <Routes>
        <Route exact path='/' element={
            <React.Fragment>
               <Login/>
            </React.Fragment>
          } />
        <Route exact path='/signup' element={
            <React.Fragment>
               <Signup/>
            </React.Fragment>
          } />

        <Route exact path='/dashboard' element={
            <React.Fragment>
               <Homepage/>
            </React.Fragment>
          } />
        </Routes>
      </Router>
      
      {/* <Homepage/> */}
     
    
      {/* <Login /> */}
     {/* <Post/> */}
    </div>
  );
}

export default App;
