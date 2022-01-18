import React from "react";
import Post from "../model/Post"
import "./styles.css"


interface PostProp {
post: Post;
onDelete: () => void;
}

function PostInList({ post, onDelete }: PostProp){

    return (
        <div className="PostInList">

        <div className="EachPost">
            <p id="PostTitle">{post.title}</p>
            <p id="PostThought">{post.thought}</p>
            </div>
            
        <div className="TrashIcon">
            <img src="https://freesvg.org/img/trash.png" onClick={onDelete} height="30px" width="30px"></img>
        </div>
        
        </div>
    )
}

export default PostInList