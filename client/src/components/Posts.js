import React from 'react';
import Post from "./Post"
import "./posts.css"

export default function Posts({posts}) {
    return (
        <div className="posts">
            <h1>Archives</h1>
            <div className='posts__container'>
                <div className='posts__wrapper'>
                    <ul className='posts__items'>
                        {posts.map((p) => (
                            <Post post={p}/>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}