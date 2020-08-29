import React from 'react';
import { useSelector } from 'react-redux'
import { titleStyle, bodyStyle, articleStyle } from './style';
import { FrostedGlass } from 'grass-roots-react';
import { Color } from 'grass-roots-react';

export default function(){

    const { posts:{ currentPost }, color:{ main } } = useSelector(state => state);

    return (
        <>
            {/* only render a post if it's defined (been selected) */}
            {!currentPost? null : 
                <article style={articleStyle}>
                    <h3 style={{...titleStyle, backgroundColor: main, color: new Color(main).getContrast()}}>{currentPost.title}</h3>
                    <FrostedGlass style={{borderTopLeftRadius:'0px', borderTopRightRadius:'0px'}}>
                        <p style={{...bodyStyle, padding:'0 0.75em'}}>{currentPost.body}</p>
                    </FrostedGlass>
                </article>
            }
        </>
    )
}