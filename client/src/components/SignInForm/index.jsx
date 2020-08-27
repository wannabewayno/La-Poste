import React from 'react';
import { FormContainer, SearchBar, SubmitButton, Container } from 'grass-roots-react';
import { colours } from '../../content/index.js';

const { backgroundColor } = colours;

export default function(){

    // sends login data to '/api/signin'
    function login(formData){
        console.log(formData);
    }

    return (
        <div style={{maxWidth:'max(300px,50vw)', marginTop:'25vh', backgroundColor, borderRadius:'15px' }}>
            <FormContainer onSubmit={login}>
                    <SearchBar
                        name={{display:'Username', id:'username', toDisplay:true}}
                        placeholder=''
                        label={{width:'65px'}}
                        container={{margin:'15px auto'}}
                    />
                    <SearchBar
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