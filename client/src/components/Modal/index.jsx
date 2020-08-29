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
    console.log('MODAL STATE:', modal);

    return (
        <>{ 
            modal==='OPEN'?
            <div 
                style={modalContainer}
                onClick={() => dispatch(closeModal())}
            >
                <div style={modalBody}>
                    <p>I am a modal bruh</p>
                    <CloseButton/>
                </div>
            </div>
            : null
        }</>
    )
}