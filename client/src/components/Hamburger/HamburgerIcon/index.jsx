import React, { useRef } from 'react';
import { containerStyle, hamburgerStyle, dropdownStyle, itemStyle } from './style';
import { onHover, onActive } from 'grass-roots-react';
import { useSelector, useDispatch } from 'react-redux';
import { openDropdown, closeDropdown } from '../../../redux/actions'

// this is the actual hamburger menu
export default function({ color, style, menuItems }){

    const { color:{neutral}, dropdown } = useSelector(state => state);
    const dispatch = useDispatch();
    
    const hamburgerRef = useRef(); // create a ref to the hamburger to update it in the DOM

    function toggleDropdown(){

        switch(dropdown){
            case 'CLOSED':{
                dispatch(openDropdown())
                hamburgerRef.current.ariaExpanded = true;
                break;
            }
            case 'OPEN':{
                dispatch(closeDropdown())
                hamburgerRef.current.ariaExpanded = false;
                break;
            }
            default:
        }
    }

    // the UI for the drop down
    function Dropdown({ menuItems }){

        return(
            <ul
                style={{...dropdownStyle, backgroundColor:neutral, borderColor:color}}
            >
                {menuItems.map((item,index) => {
                    return (
                        <li style={itemStyle} key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <>
            <div
                ref={hamburgerRef}
                aria-expanded={false}
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
                ? <Dropdown menuItems={menuItems}/>
                : null
            }
        </>
    )
}