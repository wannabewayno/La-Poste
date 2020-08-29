import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/actions'
import { CloseButton } from 'grass-roots-react';

export default function() {
    // get our dispatch
    const dispatch = useDispatch();

    // get the state of the modal
    const modal = useSelector(state => state.modal);
    console.log('MODAL STATE:', modal);

    return (
        <>{ 
            modal==='OPEN'?
            <div>
                <p>I am a modal bruh</p>
                <CloseButton
                    position='top right'
                    size='large'
                    text='close'
                    onClick={() => dispatch(closeModal())}
                />
            </div>
            : null
        }</>
    )
}