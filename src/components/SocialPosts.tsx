import React from "react";
import { useState } from "react"
import Post from "../model/Post";
import PostInList from "./PostInList"
import PostForm from "./PostForm"
// import PostForm from "./PostForm"

export default function SocialPosts() {

    const [posts, setPost] = useState<Post[]>([
        {title: "Saw a Ghost", thought: "Saw some glowing light in the basement"},
        {title: "Feeling hungry", thought: "Who's in the mood for sushi"},
        {title: "My new car!", thought: "Check out my new Porsche!"}
    ]);

    const [hidden, setHidden] = useState<boolean>(true);

    function handlePostFormSubmit (post: Post) {
        setPost((prev) => [...posts, post]);
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
