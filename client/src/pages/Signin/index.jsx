import React from 'react';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import Turntable from '../../components/Turntable';
import { Container, Button } from 'grass-roots-react';

export default function Signin(){

    return (
        <Container>
            <Turntable duration='500ms' style={{maxWidth:'max(320px,40vw)', marginTop:'15vh'}}>
                <SignInForm/>
                <SignUpForm/>
                <p style={{cursor:'pointer', fontSize:'20px', color:'white'}}>or sign up</p>
            </Turntable>
        </Container> 
    )
}