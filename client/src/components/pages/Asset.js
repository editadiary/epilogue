import React, { useState, useEffect } from 'react';
import '../../App.css';
import Posts from '../Posts';
import axios from "axios"
import { useLocation } from 'react-router-dom';
import AssetSection from '../AssetSection';

function Asset() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+'/?cat=asset')
      console.log(res)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <AssetSection />
      <Posts posts={posts}/>
      
    </>
  );
}

export default Asset;