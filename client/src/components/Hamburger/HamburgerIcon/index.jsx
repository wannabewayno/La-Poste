import React from 'react';
import { containerStyle, hamburgerStyle } from './style';
import { onHover, onActive } from 'grass-roots-react'

// this is the actual hamburger menu
export default function({ color, style }){

    function toggleDropdown(){
        console.log('clickety-click');
    }

    return (
        <div
            style={{...containerStyle, ...style}}
            {...onHover({cursor:'pointer'})}
            {...onActive({transform:'scale(0.95)'})}
            onClick={toggleDropdown}
        >
            {/* three coloured divs, middle one has top/bottom margin to separate them */}
            <div style={{ ...hamburgerStyle, backGroundColor: color}}></div>
            <div style={{ ...hamburgerStyle, margin:'15% 0', backGroundColor: color}}></div> 
            <div style={{ ...hamburgerStyle, backGroundColor: color}}></div>
        </div>
    )
}