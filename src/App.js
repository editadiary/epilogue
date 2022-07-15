import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Login from './Login';
import Posts from './Posts'
import Register from './Register';
import Single from './Single';
import Write from './Write';


import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        <Footer/>
      </Router>
    </>

  );
}

export default App;