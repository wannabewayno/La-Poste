import React from 'react';
import { useSelector } from 'react-redux'

export default function(){

    let currentPost = useSelector(state => state.posts.currentPost);
    currentPost = !currentPost? {} : currentPost;

    return (
        <article>
            <h3>{currentPost.title}</h3>
            <p>{currentPost.body}</p>
        </article>
    )
}