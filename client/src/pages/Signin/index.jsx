import React from 'react';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import Turntable from '../../components/Turntable';
import { Container } from 'grass-roots-react';
import { useBackgroundImageRouter } from 'grass-roots-react';
import { backgroundImageMap } from '../../content'

export default function Signin(){
    // conditionally renders a background image to the body based on the current window location
    useBackgroundImageRouter(backgroundImageMap);

    return (
        <Container>
            <Turntable duration='500ms' style={{maxWidth:'max(320px,40vw)', marginTop:'15vh'}}>
                <SignInForm/>
                <SignUpForm/>
                <p style={{cursor:'pointer', fontSize:'20px', color:'white', textDecoration:'underline'}}>or sign up</p>
            </Turntable>
        </Container> 
    )
}