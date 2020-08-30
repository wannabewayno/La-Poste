import React from 'react';
import { FormContainer, SubmitButton, Username, Password } from 'grass-roots-react';
import { useHistory } from 'react-router-dom'
import API from '../../utils/API';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, updateCurrentUser } from '../../redux/actions';

export default function(){

    const dispatch = useDispatch();
    const { neutral, accent } = useSelector(state => state.color);

    // need history for react-routing
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
            default: console.log('Error, not authenticated');
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
                        color={neutral}
                    />
                    <Password
                        name={{display:'Password', id:'password', toDisplay:true}}
                        placeholder=''
                        label={{width:'65px'}}
                        container={{margin:'15px auto'}}
                        color={neutral}
                    />
                    <SubmitButton
                        text='Sign in'
                        size='medium'
                        skin='flat'
                        style={{margin:'15px auto'}}
                        color={accent}
                    />
            </FormContainer>
        </div>
    )
}