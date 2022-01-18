import React from "react";
import Post from "../model/Post"
import { FormEvent } from "react"
import { useState } from "react"

interface Props {
    onSubmit: (post: Post) => void;
    onClose: () => void
}

export default function PostForm({ onSubmit, onClose }: Props) {
const [title, setTitle ] = useState("")
const [thought, setThought ] = useState("")


    function handlePostFormSubmit(e:FormEvent){
        e.preventDefault();

        const newPost: Post = {
            title: title,
            thought: thought
        };
        onSubmit(newPost);
    }
      
    return (
    <div className="PostForm" onSubmit={handlePostFormSubmit}>
    <form>

    <img 
    src="https://www.iconninja.com/files/1008/1024/1020/warning-delete-cross-stop-close-exit-cancel-icon.png" 
    id="CloseFormIcon" 
    onClick={onClose}
    alt="closeIcon">
    </img>

    <p>Title</p>
    <input type="text" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
    <p>Thought</p>
    <textarea id="thoughtTextArea" placeholder="Here's a thought!" name="thoughtTextArea" rows={12} cols={25} value={thought} onChange={(e) => setThought(e.target.value)}></textarea>
    <br></br>
    <button id="submitForm" type="submit" >Add Post</button>
    </form>
    </div>
    );
    }
