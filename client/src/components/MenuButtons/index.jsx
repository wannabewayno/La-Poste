import React from 'react';
import { Button } from 'grass-roots-react';
import { containerStyle } from './style';
import Hamburger from '../Hamburger';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, logOut } from '../../redux/actions';


export default function(){
    const { accent } = useSelector(state => state.color);
    const dispatch = useDispatch();

    return (
        <div style={containerStyle}>
            <Hamburger
                breakpoint={576}
                style={{marginRight:'1em'}}
                color={accent}
            >
                <Button
                    text="Logout"
                    skin="flat"
                    size='small'
                    onClick={() => dispatch(logOut())}
                    color={accent}
                />
                <Button
                    text="Settings"
                    skin="flat"
                    size='small'
                    onClick={() => dispatch(openModal())}
                    color={accent}
                />
            </Hamburger>
        </div>
    )
}