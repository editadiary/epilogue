import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Family from './components/pages/Family';
import Friends from './components/pages/Friends';
import Asset from './components/pages/Asset';
import Personal from './components/pages/Personal';
import Login from './components/pages/Login';
import Register from './components/pages/Register'
import Single from './components/Single';
import Write from './components/Write';
import Footer from './components/Footer';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/family' element={<Family/>} />
          <Route path='/friends' element={<Friends/>} />
          <Route path='/personal' element={<Personal/>} />
          <Route path='/asset' element={<Asset/>} />
          <Route path="/login" element={user ? <Home /> : <Login />}/>
          <Route path='/register' element={<Register/>} />

          <Route path='/write' element={<Write/>} />
          <Route path='/post/:postId'  element={<Single/>} />


        </Routes>
        <Footer/>
      </Router>
    </>

  );
}

export default App;