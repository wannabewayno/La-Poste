import React from 'react';
import { FormContainer, Username, Password, SubmitButton } from 'grass-roots-react';
import API from '../../utils/API'
// import { colours } from '../../content/index.js';

// const { backgroundColor } = colours;

export default function(){

    // sends login data to '/api/user' to create a new user
    async function signUp(formData){
        const { username, password, confirmPassword } = formData;
        
        // check that username is more than 4 characters
        if(password === confirmPassword && username.length >= 4 ){
            const response = await API.createUser({username, password});
            // clear the form, on success
            // on error leave it as is
        } else {

        }
    }

    return (
        <div >
            <FormContainer onSubmit={signUp}>
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
                    <Password
                        name={{display:'Confirm Password', id:'confirmPassword', toDisplay:true}}
                        placeholder=''
                        label={{width:'120px'}}
                        container={{margin:'15px auto'}}
                    />
                    <SubmitButton
                        color='rgb(255,255,255)'
                        text='Create Account'
                        size='medium'
                        style={{margin:'15px auto'}}
                    />
            </FormContainer>
        </div>
    )
}