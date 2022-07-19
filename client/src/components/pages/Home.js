import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Posts from '../Posts';
import axios from "axios"
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';

function Home() {
  const {user} = useContext(Context);
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search)
      console.log(res)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <HeroSection />
      {user && <Posts posts={posts}/>}
    </>
  );
}

export default Home;