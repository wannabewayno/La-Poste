import React from 'react';
import { updateCurrentPost } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { onHover } from 'grass-roots-react';

export default function({ posts = [] }){

    const dispatch = useDispatch();

    // call this when clicking on a title from the sidebar list, updates the current post
    const clickPost = postId => dispatch(updateCurrentPost(postId));

    const hoverStyle = { color:'rgb(255,125,125)', cursor:'pointer' }
    
    return (
        <ul>
            {posts.map(({ title, id },index) => (
                    <li
                        key = {index}
                        onClick = {() => clickPost(id)}
                        {...onHover(hoverStyle)}
                    >
                        {title}
                    </li>
                )
            )}
        </ul>
    )
}