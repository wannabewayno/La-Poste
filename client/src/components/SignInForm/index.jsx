import React from 'react';
import { FormContainer, SubmitButton, Username, Password } from 'grass-roots-react';
import API from '../../utils/API';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions';
// import { colours } from '../../content/index.js';

// const { backgroundColor } = colours;

export default function(){

    const dispatch = useDispatch();

    // sends login data to '/api/signin'
    async function login(formData){

        const { isAuthenticated, message } = await API.authenticateUser(formData);
        
        switch(isAuthenticated){
            case true: dispatch(logIn()); break;
            case false: console.log(`Error: ${message}`); break; // let the user know with a tool tip or something
        }
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
                        color='rgb(255,255,255)'
                        text='Sign in'
                        size='medium'
                        style={{margin:'15px auto'}}
                    />
            </FormContainer>
        </div>
    )
}