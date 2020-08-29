import React from 'react';
import { Button } from 'grass-roots-react';
import { containerStyle } from './style';
import Hamburger from '../Hamburger';
import { useDispatch } from 'react-redux';
import { openModal, logOut } from '../../redux/actions';


export default function(){

    const dispatch = useDispatch();

    return (
        <div style={containerStyle}>
            <Hamburger
                breakpoint={576}
                menuItems={['Logout','Settings']}
                style={{marginRight:'1em'}}
            >
                <Button
                    text="Logout"
                    skin="flat"
                    size='small'
                    onClick={() => dispatch(logOut())}
                />
                <Button
                    text="Settings"
                    skin="flat"
                    size='small'
                    onClick={() => dispatch(openModal())}
                />
            </Hamburger>
        </div>
    )
}