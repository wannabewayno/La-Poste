import React, { useState, useEffect } from 'react';
import { Button } from 'grass-roots-react';
import PostList from '../PostList';
import { asideStyle } from './style';
import API from '../../utils/API';

export default function(){

    const [posts, setPosts] = useState(
        {
            posts:[],
            userId:0
        });

    async function loadMore(){
        // calls an API to get posts
        console.log('loading posts');
        
        // set loading posts to true here
        const newPosts = await API.getPosts();
        const postGroup = posts.userId + 1
        setPosts({
            posts:newPosts.filter(post => post.userId === postGroup),
            userId:postGroup
        });
        // set loading posts to false here
    }

    useEffect(()=> {
        loadMore();
    },[])


    return (
        // container to hold the ten posts
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