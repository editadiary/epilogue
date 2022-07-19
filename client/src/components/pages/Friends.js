import React, { useState, useEffect } from 'react';
import '../../App.css';
import Posts from '../Posts';
import axios from "axios"
import { useLocation } from 'react-router-dom';
import FriendSection from '../FriendSection';

function Friends() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+'/?cat=friends')
      console.log(res)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <FriendSection />
      <Posts posts={posts}/>
      
    </>
  );
}

export default Friends;