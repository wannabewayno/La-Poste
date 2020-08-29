import React from 'react';
import { FormContainer, SubmitButton, Username, Password } from 'grass-roots-react';
import { useHistory } from 'react-router-dom'
import API from '../../utils/API';
import { useDispatch } from 'react-redux';
import { logIn, updateCurrentUser } from '../../redux/actions';
// import { colours } from '../../content/index.js';

// const { backgroundColor } = colours;

export default function(){

    const dispatch = useDispatch();
    const history = useHistory();
   
    async function login(formData){
        // sends login data to '/api/signin' and returns true if authenticated
        const { isAuthenticated, message, username } = await API.authenticateUser(formData);
        console.log(username);
        switch(isAuthenticated){
            case true: {
                dispatch(logIn());
                dispatch(updateCurrentUser(username))
                history.push('/dashboard');
                break;
            }
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