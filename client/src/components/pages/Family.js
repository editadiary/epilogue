import React, { useState, useEffect } from 'react';
import '../../App.css';
import Posts from '../Posts';
import axios from "axios"
import { useLocation } from 'react-router-dom';
import FamilySection from '../FamilySection';

function Family() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+'/?cat=family')
      console.log(res)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <FamilySection />
      <Posts posts={posts}/>
      
    </>
  );
}

export default Family;