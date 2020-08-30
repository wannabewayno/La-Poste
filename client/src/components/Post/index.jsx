import React from 'react';
import { useSelector } from 'react-redux'
import { titleStyle, bodyStyle, articleStyle } from './style';
import { FrostedGlass } from 'grass-roots-react';
import { Color } from 'grass-roots-react';
import { useWindowSize } from 'grass-roots-react';

export default function(){

    const { posts:{ currentPost }, color:{ main } } = useSelector(state => state);

    const { width } = useWindowSize();

    return (
        <>
            {/* only render a post if it's defined (been selected) */}
            {!currentPost? null : 
                <article
                    style={{
                        ...articleStyle,
                        ...(width < 576? {padding:'0px', width:'100%'}:'')
                    }}>
                    <h3 style={{...titleStyle, backgroundColor: main, color: new Color(main).getContrast()}}>{currentPost.title}</h3>
                    <FrostedGlass style={{borderTopLeftRadius:'0px', borderTopRightRadius:'0px'}}>
                        <p style={{...bodyStyle, padding:'0 0.75em'}}>{currentPost.body}</p>
                    </FrostedGlass>
                </article>
            }
        </>
    )
}