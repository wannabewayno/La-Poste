import React from 'react';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import MenuButtons from '../../components/MenuButtons';
import Post from '../../components/Post';
import { Container } from 'grass-roots-react';

export default function Dashboard(){
    return (
        <main style={{height:'80vh'}}>

            <section style={{display:'flex', height:'100%',}}>
            	<SideBar/>
            	<Container>
            	    <Post/>
            	</Container>
            </section>

            <Footer/>
        </main>
    )
}