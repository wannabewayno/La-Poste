import React, { useState } from 'react';
import { FormContainer, SubmitButton, Username, Password } from 'grass-roots-react';
import { useHistory } from 'react-router-dom'
import API from '../../utils/API';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, updateCurrentUser } from '../../redux/actions';

export default function(){

    const dispatch = useDispatch();
    const { neutral, accent } = useSelector(state => state.color);

    // authentication state for UI purposes
    const [failedAuthentication, setFailedAuthentication ] = useState({
        usernameFailed:false,
        passwordFailed:false,
        message:'',
        color:'rgb(230,82,82)',
        whatFailed:undefined
    });

    // need history for react-routing
    const history = useHistory();
   
    async function login(formData){
        // sends login data to '/api/signin' and returns true if authenticated
        const { isAuthenticated, message, username, whatFailed } = await API.authenticateUser(formData);
    
        if(isAuthenticated){
            dispatch(logIn()); // set the user's state to logged in
            dispatch(updateCurrentUser(username)) // update the currentUser to reflect this user
            history.push('/dashboard'); // re-direct the user to the dashboard
        } else { 
            console.log(`Error: ${message}`); // log the error in the console;
            switch(whatFailed){
                // set failedAuthentication to true so form updates with appropriate message
                case 'username': setFailedAuthentication({...failedAuthentication, usernameFailed:true, message, whatFailed}); break; 
                case 'password': setFailedAuthentication({...failedAuthentication, passwordFailed:true, message, whatFailed}); break;
            }
        }
    }

    return (
        <div style={{maxWidth:'max(300px,50vw)',}}>
            <FormContainer onSubmit={login}>
                    <Username
                        name={{display:'Username', id:'username', toDisplay:true}}
                        placeholder={failedAuthentication.usernameFailed? failedAuthentication.message : ''}
                        label={{width:'65px'}}
                        container={{margin:'15px auto'}}
                        color={failedAuthentication.usernameFailed? failedAuthentication.color:neutral}
                    />
                    <Password
                        name={{display:'Password', id:'password', toDisplay:true}}
                        placeholder={failedAuthentication.passwordFailed? failedAuthentication.message:''}
                        label={{width:'65px'}}ral
                        container={{margin:'15px auto'}}
                        color={failedAuthentication.passwordFailed? failedAuthentication.color:neutral}
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