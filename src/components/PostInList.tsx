import React from "react";
import Post from "../model/Post";
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
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-trash-can-27.png" 
            onClick={onDelete} 
            height="15px" 
            width="15px"
            alt="TrashCanIcon"></img>
        </div>
        
        </div>
    )
}

export default PostInList