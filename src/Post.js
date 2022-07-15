import "./post.css"

export default function Post() {
    return (
        <div className="post">
           <img className="postImg" src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30502.jpg?w=360" alt=""/>
           <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Post Title
            </span>
            <hr></hr>
            <span className="postDate">1 hour ago</span>
           </div>
           <p className="postDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    );
}