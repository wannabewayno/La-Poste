import React from 'react';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import Turntable from '../../components/Turntable';
import { Container } from 'grass-roots-react';

export default function Signin(){
    return (
        <Container>
            <Turntable duration='1000ms'>
                <SignInForm/>
                <SignUpForm/>
                <a>or sign up</a>
            </Turntable>
        </Container> 
    )
}