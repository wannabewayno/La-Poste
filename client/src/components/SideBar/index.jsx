import React, { useState } from 'react';
import { Button } from 'grass-roots-react';
import PostList from '../PostList';
import { asideStyle } from './style';
import API from '../../utils/API';

export default function(){

    const [posts, setPosts] = useState([]);

    async function loadPosts(){
        // calls an API to get posts
        console.log('loading posts');
        // set loading posts to true here
        const posts = await API.getPosts();
        setPosts(posts);
        // set loading posts to false here
        console.log(posts);
    }


    return (
        // container to hold the ten posts
        <aside style={asideStyle}>
            <Button
                text='Load more'
                color='black'
                onClick={loadPosts}
                size='small'
                style={{marginTop:'1em'}}
            />
            <PostList posts={posts}/>
        </aside>
    )
}