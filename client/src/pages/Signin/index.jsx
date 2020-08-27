import React from 'react';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import { Container } from 'grass-roots-react';

export default function Signin(){
    return (
        <Container>
            <SignInForm/>
            <SignUpForm/>
        </Container> 
    )
}