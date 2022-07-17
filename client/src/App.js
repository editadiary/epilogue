import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Family from './components/pages/Family';
import Friends from './components/pages/Friends';
import Personal from './components/pages/Personal';
import Login from './components/pages/Login';
import Register from './components/pages/Register'
import Posts from './components/Posts'
// import Register from './Register';
import Single from './components/Single';
import Write from './components/Write';
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
          <Route path='/login' element={<Login/>} /> 
          <Route path='/register' element={<Register/>} />

          <Route path='/family/write' element={<Write/>} />
          <Route path='/family/single' element={<Single/>} />
          <Route path='/family/posts' element={<Posts/>} />

        </Routes>
        <Footer/>
      </Router>
    </>

  );
}

export default App;