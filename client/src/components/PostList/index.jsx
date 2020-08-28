import React from 'react';
import { Button } from 'grass-roots-react';
import { updateCurrentPost } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function({ posts }){

    const dispatch = useDispatch();

    function clickPost(postId){
        dispatch(updateCurrentPost(postId));    
    }

    return (
        <ul>
            {posts.map(({ title, id },index) => (
                    <li key={index} onClick={() => clickPost(id)} >
                        {title}
                    </li>
                )
            )}
        </ul>
    )
}