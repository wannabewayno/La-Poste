import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from 'grass-roots-react';
import { closeModal } from '../../redux/actions'
import { modalContainer, modalBody } from './style';
import CloseButton from './CloseButton';
import ChangeUsername from './ChangeUsername';
import ChangePassword from './ChangePassword';
import SelectTheme from './SelectTheme'


export default function() {

    // get our dispatch
    const dispatch = useDispatch();

    // get username, colour and modal global states
    const { username, color:{ dark, neutral }, modal } = useSelector(state => state);

    const handleCloseModal= event => {
        if(event.target.className === 'modalContainer') dispatch(closeModal());
    }

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
                    <SelectTheme/>
                    <CloseButton/>
                </div>
            </div>
            : null // if modal should be closed, render nothing
        }</>
    )
}