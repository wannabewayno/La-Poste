import React, { useRef } from 'react';
import { Color } from 'grass-roots-react';
import { paletteStyle, flex, top, right, bottom, left } from './style';
import { useDispatch } from 'react-redux';
import { updateColorScheme } from '../../../redux/actions';
import { minWidth } from 'grass-roots-react';
import useWindowSize from '../../../hooks/useWindowSize';

export default function({ style, palettes, currentTheme }) {

    const dispatch = useDispatch();

    // calls dispatch and updates the users colourScheme in the global store
    function updateTheme( newColorScheme, ref ){

        // ref.current.style.outline = '2px solid black'
        dispatch(updateColorScheme(newColorScheme))
    }

    // use the window size here to determine when to snap to column
    const { width } = useWindowSize();

    // set up a breakpoint variable
    const breakpoint = 576

    const startStyle = width < breakpoint ? top: left;
    const endStyle =   width < breakpoint ? bottom: right;

    return (
        <>
            <h4 style={{textAlign:'center'}}>Choose a Theme</h4>
            <div style={{...flex, ...style, ...(width < breakpoint) ? {flexDirection:'column', width:'80%'}:'' }}>
                {
                    palettes.map( (palette, index, array) => {
                        // Each colour palette
                        const { name, main, accent } = palette;
                        
                        // create a ref to update this in the dom
                        const ref = useRef();

                        // this creates a coloured box around the current theme
                        const currentStyle = {
                            border:`2px solid ${accent}`
                        }
    
                        return (
                            <div
                                ref={ref}
                                style={{
                                    ...paletteStyle,
                                    backgroundColor:main,
                                    ...(index===0? startStyle:''),
                                    ...(index===(array.length -1)? endStyle:''),
                                    ...(name===currentTheme? currentStyle:'')
                                }}
                                onClick={() => updateTheme(name,ref)}
                                key={index}
                            >
                                <p style={{color:new Color(main).getContrast(), margin:'0 auto'}}>{ name }</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}