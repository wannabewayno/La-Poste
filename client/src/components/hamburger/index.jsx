import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Hamburger from './Hamburger'

// this wraps content
// if the window width is less than the breakpoint specified
// either displays the original content, or a hamburger menu with a dropdown.
export default function({ breakpoint, children, style }){

    // get window width to compare againt the set breakpoint
    const { width } = useWindowSize();

    return (
        <>
        {
            width < breakpoint ? <Hamburger style={style}/> : children
        }
        </>
    )
}