import React, { useEffect } from 'react';
import { dropdownStyle, itemStyle } from './style';
import { useDispatch } from 'react-redux';
import { closeDropdown } from '../../../../redux/actions';
 
 // the UI for the drop down
 // this will render all compnents hamburger is wrapped around in a dropdown box
export default ({ menuItems, borderColor, backgroundColor, refstoAvoid }) => {

    const dispatch = useDispatch();

    
    const closeDropdownFn = () => dispatch(closeDropdown());

    // this handles clicking anywhere outside the dropdown, to close the dropdown
    useEffect(() => {
        document.addEventListener('click', closeDropdownFn);
        
        // remove this from the DOM when dropdown is not rendered
        return () => document.removeEventListener('click', closeDropdownFn); 
    },[])

    return(
        <ul
            style={{...dropdownStyle, backgroundColor, borderColor}}
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