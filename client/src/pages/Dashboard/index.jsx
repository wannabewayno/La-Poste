import React from 'react';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import { Container } from 'grass-roots-react';
import Modal from '../../components/Modal';
import { useWindowSize } from 'grass-roots-react';
import { useBackgroundImageRouter } from 'grass-roots-react';
import { backgroundImageMap } from '../../content'
import { mobileStyle } from './style';

export default function(){
    // conditionally renders a background image to the body based on the current window location
    useBackgroundImageRouter(backgroundImageMap);

    // use window width for breakpoint reference;
    const { width } = useWindowSize();

    return (
        <main 
            style={{
                height:(width<576)?'100%':'85vh',
            }}
        >

            <section style={{
                display:'flex',
                height:'100%',
                ...(width<576? mobileStyle:''),
                marginBottom:'5vh' // to clear fixed footer
            }}>
            	<SideBar/>
            	<Container>
            	    <Post/>
            	</Container>
            </section>
            <Modal/>
            <Footer/>
        </main>
    )
}