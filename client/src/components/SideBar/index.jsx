import React, { useState, useEffect } from 'react';
import { Button } from 'grass-roots-react';
import PostList from '../PostList';
import { asideStyle } from './style';
import API from '../../utils/API';
import randomParagraph from '../../utils/randomParagraph';

export default function(){

    const [posts, setPosts] = useState(
        {
            posts:[],
            userId:0
        });

    async function loadMore(){
        
        console.log('loading posts');

        // posts come in groups of 10, grouped by an id
        // increment the id to get a new batch of posts
        const postGroup = posts.userId + 1

        // set loading posts to true here

        // calls an API to get posts
        const allPosts = await API.getPosts();
        let newPosts = allPosts.filter(post => post.userId === postGroup);

        // let's generate a body for the post as the provided endpoint only comes with a title
        newPosts = newPosts.map(post => {
            post.body = randomParagraph();
            return post;
        })
        // set loading posts to false here
        console.log(newPosts);
        // set our state to these posts
        setPosts({
            posts:newPosts,
            userId:postGroup
        });
        
    }

    // loads initial posts on page load
    useEffect(()=> {
        loadMore();
    },[])


    return (
        // container to hold the Post titles
        <aside style={asideStyle}>
            <Button
                text='Load more'
                color='black'
                onClick={loadMore}
                size='small'
                style={{marginTop:'1em'}}
            />
            <PostList posts={posts.posts}/>
        </aside>
    )
}