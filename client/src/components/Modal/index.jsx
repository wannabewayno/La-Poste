import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/actions'
import { Button } from 'grass-roots-react';
import { modalContainer, modalBody } from './style';
import CloseButton from './CloseButton';


export default function() {

    // get our dispatch
    const dispatch = useDispatch();

    // get the state of the modal
    const modal = useSelector(state => state.modal);

    return (
        <>{ 
            modal==='OPEN'? // if modal shoudl be open, render the modal
            <div 
                style={modalContainer}
                onClick={() => dispatch(closeModal())} // click outside the modal to also close it
            >
                <div style={modalBody}>
                    <p>I am a modal</p>
                    <CloseButton/>
                </div>
            </div>
            : null // if modal should be closed, render nothing
        }</>
    )
}