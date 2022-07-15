import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
// import Login from './Login';
// import Posts from './Posts'
// import Register from './Register';
// import Single from './Single';
// import Write from './Write';

import Home from './components/pages/Home';
import Family from './components/pages/Family';
import Friends from './components/pages/Friends';
import Personal from './components/pages/Personal';
import LogIn from './components/pages/LogIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/family' element={<Family/>} />
          <Route path='/friends' element={<Friends/>} />
          <Route path='/personal' element={<Personal/>} />
          <Route path='/log-in' element={<LogIn/>} />
        </Routes>
        <Footer/>
      </Router>
    </>

  );
}

export default App;