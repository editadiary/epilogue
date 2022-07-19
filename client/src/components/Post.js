import React from 'react';
import { Link } from 'react-router-dom';
import "./post.css"

export default function Post({post}) {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            <Link className='postItemLink' to={`/post/${post._id}`}>
                <figure className='postImgWrap'>
                    <img 
                        className="postImg" 
                        src={PF + post.photo}
                        alt=""/>
                </figure>
            
                <div className="postInfo">
                    <div className="postCats">
                        {post.categories.map((c)=>(
                            <span className='postCat'>{c.name}</span>
                        ))}
                    </div>
                        <span className='postTitle'>{post.title}</span>
                    <hr></hr>
                    <span className="postDate">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                {/* <p className="postDesc">{post.desc}</p> */}
           </Link>
        </div>
    );
}