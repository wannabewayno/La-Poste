import React from 'react';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import Turntable from '../../components/Turntable';
import { Container, Button } from 'grass-roots-react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions';


export default function Signin(){

    const dispatch = useDispatch()

    return (
        <Container>
            <Turntable duration='500ms' style={{maxWidth:'max(320px,40vw)', marginTop:'15vh'}}>
                <SignInForm/>
                <SignUpForm/>
                <p style={{cursor:'pointer'}}>or sign up</p>
            </Turntable>
            <Button
                text='Log in'
                size='large'
                onClick={() => dispatch(logIn())}
            />
        </Container> 
    )
}