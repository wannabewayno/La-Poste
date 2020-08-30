import React from 'react';
import closeIcon from './close-icon.png'
import { buttonStyle, imageStyle } from './style';
import { onHover, onActive } from 'grass-roots-react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/actions';

export default function () {
    const dispatch = useDispatch()

    return (
        <button
            style={buttonStyle}
            {...onHover({transform:'scale(1.05)'})}
            {...onActive({transform:'scale(0.95)'})}
            onClick={() => dispatch(closeModal())}
        >
            <img src={closeIcon} style={imageStyle} alt='close icon'/>
        </button>
    )
}