import React from 'react';
import { updateCurrentPost } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function({ posts = [] }){

    const dispatch = useDispatch();

    function clickPost(postId){
        console.log('clickPost');
        dispatch(updateCurrentPost(postId));    
    }
    console.log('PostList:',posts);
    return (
        <ul>
            {posts.map(({ title, id },index) => (
                    <li key={index} onClick={() => clickPost(id)}>
                        {title}
                    </li>
                )
            )}
        </ul>
    )
}