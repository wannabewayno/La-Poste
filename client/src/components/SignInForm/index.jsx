import React from 'react';
import { FormContainer, SubmitButton, Username, Password } from 'grass-roots-react';
import { colours } from '../../content/index.js';

const { backgroundColor } = colours;

export default function(){

    // sends login data to '/api/signin'
    function login(formData){
        console.log(formData);
    }

    return (
        <div style={{maxWidth:'max(300px,50vw)',}}>
            <FormContainer onSubmit={login}>
                    <Username
                        name={{display:'Username', id:'username', toDisplay:true}}
                        placeholder=''
                        label={{width:'65px'}}
                        container={{margin:'15px auto'}}
                    />
                    <Password
                        name={{display:'Password', id:'password', toDisplay:true}}
                        placeholder=''
                        label={{width:'65px'}}
                        container={{margin:'15px auto'}}
                    />
                    <SubmitButton
                        text='Sign in'
                        size='medium'
                        style={{margin:'15px auto'}}
                    />
            </FormContainer>
        </div>
    )
}