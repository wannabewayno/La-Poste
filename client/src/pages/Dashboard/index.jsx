import React, { useEffect } from 'react';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import { Container, Button } from 'grass-roots-react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions';
import Modal from '../../components/Modal';

export default function({ isLoggedIn }){
    const dispatch = useDispatch()
    if(isLoggedIn) dispatch(logIn());

    const state = useSelector(state => state);
    console.log('Dashboard: STATE',state);

    useEffect(() => {
        console.log('RERENDER STATE:',state);
    },[state])

    return (
        <main style={{height:'85vh'}}>

            <section style={{display:'flex', height:'100%',}}>
            	<SideBar/>
            	<Container>
            	    <Post/>
                    <Button
                        text='Log in'
                        size='large'
                        onClick={() => dispatch(logIn())}
                    />
            	</Container>
            </section>
            <Modal/>
            <Footer/>
        </main>
    )
}