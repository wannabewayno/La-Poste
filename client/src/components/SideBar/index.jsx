import React from 'react';
import { Button } from 'grass-roots-react';
import PostList from '../PostList';

export default function(){

    function loadPosts(){
        //calls /api/posts to get posts
    }

    const posts = [{text:'hello world'},{text:'hello world'},{text:'hello world'}]

    return (
        // container to hold the ten posts
        <aside style={}>
            <Button
                text='Load Posts'
                color='black'
                onClick={loadPosts}
                size='small'
            />
            <PostList posts={posts}/>
        </aside>
    )
}