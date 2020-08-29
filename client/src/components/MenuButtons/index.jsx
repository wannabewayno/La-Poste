import React from 'react';
import { Button } from 'grass-roots-react';
import { containerStyle } from './style';

export default function(){

    

    return (
        <div style={containerStyle}>
            <Button
                text="Logout"
                skin="flat"
                size='small'
            />
            <Button
                text="Settings"
                skin="flat"
                size='small'
            />
        </div>
    )
}