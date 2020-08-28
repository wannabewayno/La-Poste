import React from 'react';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import Turntable from '../../components/Turntable';
import { Container } from 'grass-roots-react';

export default function Signin(){

    return (
        <Container>
            <Turntable duration='500ms' style={{maxWidth:'max(320px,40vw)', marginTop:'15vh'}}>
                <SignInForm/>
                <SignUpForm/>
                <a style={{cursor:'pointer'}}>or sign up</a>
            </Turntable>
        </Container> 
    )
}