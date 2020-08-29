import React from 'react';
import { useSelector } from 'react-redux'
import { titleStyle, bodyStyle, articleStyle } from './style';
import { FrostedGlass } from 'grass-roots-react';

export default function(){

    const currentPost = useSelector(state => state.posts.currentPost);

    return (
        <>
            {/* only render a post if it's defined (been selected) */}
            {!currentPost? null : 
                <article style={articleStyle}>
                    <h3 style={{...titleStyle, backgroundColor:'rgb(255,125,125)'}}>{currentPost.title}</h3>
                    <FrostedGlass style={{borderTopLeftRadius:'0px', borderTopRightRadius:'0px'}}>
                        <p style={bodyStyle}>{currentPost.body}</p>
                    </FrostedGlass>
                </article>
            }
        </>
    )
}