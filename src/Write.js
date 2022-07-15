import React from 'react';
import "./write.css"
export default function Write() {
    return (
        <div className="write">
            <img 
            className="writeImg" 
            src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30502.jpg?w=360" 
            alt=""/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" 
                    placeholder="title" 
                    className="writeInput" 
                    autoFocus={true}
                    /> 
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story.." 
                    type="text" 
                    className="writeInput writeText">
                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}