import React from 'react';
import { headlineStyle, headerStyle } from './style';
import MenuButtons from '../MenuButtons';

export default function Header({
    text,
    color = 'transparent',
    textColor = 'hsl(0,0%,0%)',
    skin = 'default',
    position = 'relative',
    height = '10vh',
    style = {}
}){
    const headerCSS = { ...headerStyle, color:textColor, height, backgroundColor:color,...style }

    return (
        <header style={headerCSS}>
            <a style={headlineStyle} href='/'>
                {text}
            </a>
            <MenuButtons/>
        </header>
    )
}