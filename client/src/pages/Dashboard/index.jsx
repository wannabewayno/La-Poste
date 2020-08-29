import React, { useEffect } from 'react';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import { Container } from 'grass-roots-react';
import Modal from '../../components/Modal';
import { useBackgroundImageRouter } from 'grass-roots-react';
import { backgroundImageMap } from '../../content'

export default function(){
    // conditionally renders a background image to the body based on the current window location
    useBackgroundImageRouter(backgroundImageMap);

    return (
        <main style={{height:'85vh'}}>

            <section style={{display:'flex', height:'100%',}}>
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