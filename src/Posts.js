import React from 'react';
import Post from "./Post"
import "./posts.css"
import TopBar from "./TopBar"

export default function Posts() {
    return (
        <><TopBar></TopBar>
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div></>
    )
}