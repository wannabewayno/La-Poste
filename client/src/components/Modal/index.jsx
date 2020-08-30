import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from 'grass-roots-react';
import { closeModal } from '../../redux/actions'
import { modalContainer, modalBody } from './style';
import CloseButton from './CloseButton';
import ChangeUsername from './ChangeUsername';
import ChangePassword from './ChangePassword';
import ThemePicker from './ThemePicker'
import { palettes } from '../../content';


export default function() {

    // get our dispatch
    const dispatch = useDispatch();

    // get username, colour and modal global states
    const { username, color:{ dark, neutral, name }, modal } = useSelector(state => state);

    const handleCloseModal= event => {
        if(event.target.className === 'modalContainer') dispatch(closeModal());
    }

    // turn colour palettes into an array of colour palettes for ThemePicker
    const paletteArray = Object.values(palettes);

    return (
        <>{ 
            modal==='OPEN'? // if modal should be open, render the modal
            <div
                className='modalContainer'
                style={{...modalContainer, backgroundColor: new Color(dark).setOpacity(60).CSS()}}
                onClick={event => handleCloseModal(event)} // click outside the modal to also close it
            >
                <div style={{...modalBody, backgroundColor:neutral}}>
                    <h3>Hey There <span>{username}</span></h3>
                    <ChangeUsername/>
                    <ChangePassword/>
                    <ThemePicker
                        palettes={paletteArray}
                        currentTheme={name}
                        style={{marginTop:'20px'}}
                    />
                    <CloseButton/>
                </div>
            </div>
            : null // if modal should be closed, render nothing
        }</>
    )
}