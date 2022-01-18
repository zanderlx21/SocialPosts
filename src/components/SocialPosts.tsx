import React from "react";
import { useState } from "react"
import Post from "../model/Post";
import PostInList from "./PostInList"
import PostForm from "./PostForm"
// import PostForm from "./PostForm"

export default function SocialPosts() {

    const [posts, setPost] = useState<Post[]>([
        {title: "My NFT is worth Millions!", thought: "You guys gotta get on this!"},
        {title: "Delorean for Sale", thought: "Wait until this baby hits 88mph"},
        {title: "Time Travel is real!", thought: "All you need is a Flux Capacitor!"}
    ]);

    const [hidden, setHidden] = useState<boolean>(true);

    function handlePostFormSubmit (post: Post) {
        
        setPost((prev) => [...posts, post]);
        setHidden(true)
    }

    function handleDeletePost(index: number) {
        setPost((prev) => [...prev.slice(0, index), ...prev.slice(index +1)])
    }

return (
<div className="PostsParent">
    <h1>My thoughts</h1>
    <button className="NewThought" onClick={ ()=> setHidden(false)}>New Thought</button>
    <div className="PostsMap">
        {posts.map((post, i) => (
        <PostInList key={i} post={post}  onDelete={ ()=> handleDeletePost(i)} />
        ))}
        <div>
        {!hidden ? <div className="blurBG"><p></p></div> : null}
        {!hidden ? <PostForm onSubmit={handlePostFormSubmit} onClose={() => setHidden(true)} /> : null}</div>
        </div>

</div>

)
}
