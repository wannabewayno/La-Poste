import React, { useRef, useEffect } from 'react';
import { containerStyle, hamburgerStyle } from './style';
import { onHover, onActive } from 'grass-roots-react';
import { useSelector, useDispatch } from 'react-redux';
import { openDropdown, closeDropdown } from '../../../redux/actions'
import Dropdown from './Dropdown';

// this is the actual hamburger menu

export default  function ({ color, style, menuItems }){

    const { color:{ neutral }, dropdown } = useSelector(state => state);
    const dispatch = useDispatch();

    function toggleDropdown(){

        switch(dropdown){
            case 'CLOSED': dispatch(openDropdown()); break;
            case 'OPEN': dispatch(closeDropdown()); break;
            default:
        }
    }

    return (
        <>
            <div
                style={{...containerStyle, ...style}}
                {...onHover({cursor:'pointer'})}
                {...onActive({transform:'scale(0.95)'})}
                onClick={toggleDropdown}
                aria-label='show options menu'
            >
                {/* three coloured divs, middle one has top/bottom margin to separate them */}
                <div style={{ ...hamburgerStyle, backgroundColor: color}}></div>
                <div style={{ ...hamburgerStyle, margin:'15% 0', backgroundColor: color}}></div> 
                <div style={{ ...hamburgerStyle, backgroundColor: color}}></div>
            </div>
            {   
                dropdown==='OPEN'
                ? <Dropdown menuItems={menuItems} backgroundColor={neutral} color={color}/>
                : null
            }
        </>
    )
}
