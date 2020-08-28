import React from 'react';

export default function(post){
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </article>
    )
}