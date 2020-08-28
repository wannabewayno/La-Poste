import React, { useEffect } from 'react';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import { Container } from 'grass-roots-react';
import { useSelector } from 'react-redux';

export default function Dashboard(){

    const state = useSelector(state => state);
    console.log('Dashboard: CurrentPost',state);

    useEffect(() => {
        console.log('STATE:',state.posts.currentPost);
    },[state])

    return (
        <main style={{height:'85vh'}}>

            <section style={{display:'flex', height:'100%',}}>
            	<SideBar/>
            	<Container>
            	    <Post post={state.posts.currentPost}/>
            	</Container>
            </section>

            <Footer/>
        </main>
    )
}