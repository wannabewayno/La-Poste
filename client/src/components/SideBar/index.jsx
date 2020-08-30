import React, { useState, useEffect, useRef } from 'react';
import { Button, useWindowSize, Color } from 'grass-roots-react';
import PostList from '../PostList';
import { asideStyle, mobileAsideStyle, dropdownButtonStyle } from './style';
import API from '../../utils/API';
import randomParagraph from '../../utils/randomParagraph';
import { useSelector, useDispatch } from 'react-redux';
import { updatePosts, startFetchingPosts, stopFetchingPosts } from '../../redux/actions';
import color from '../../redux/reducers/color';

export default function(){
    const dispatch = useDispatch();

    const { posts:{ allPosts }, color:{ neutral, accent } } = useSelector(state => state);

    // this keeps track of userId a poorly named convention from jsonplaceholder. 
    // posts are grouped by userId from the API endpoint
    // loading another 10 posts is simply filtering all posts by this userId
    // we increment this for a new batch of posts everytime load more runs
    const [userId, setUserId] = useState(0);

    // loads 10 more posts when 'Load more' is clicked
    async function loadMore(){
        
        console.log('loading posts');

        // posts come in groups of 10, grouped by an id
        // increment the id to get a new batch of posts
        const postGroup = userId + 1

        // set isFetchingPosts to true
        dispatch(startFetchingPosts())

        // calls an API to get posts
        const allPosts = await API.getPosts();
        let newPosts = allPosts.filter(post => post.userId === postGroup);

        // let's generate a body for the post as the provided endpoint only comes with a title
        newPosts = newPosts.map(post => {
            post.body = randomParagraph();
            return post;
        })

        // updates the userId, so we can get a new group of posts when 'load more' is clicked
        setUserId(postGroup);

        // set isFetchingPosts to false
        dispatch(stopFetchingPosts())

        // store our new posts in the global store
        dispatch(updatePosts(newPosts));
        
    }

    function toggleDropdown(){
        switch(sidebar.current.dataset.state){
            case'OPEN':{
                sidebar.current.style.height= '0px';
                sidebar.current.dataset.state = 'CLOSED'
                break;
            }
            case'CLOSED':{
                sidebar.current.style.height= 'fit-content';
                sidebar.current.dataset.state = 'OPEN'
                break;
            }
        }
    }

    // loads initial posts on page load
    useEffect(()=> {
        loadMore();
    },[])

    // reference for breakpoint for mobile.
    const { width } = useWindowSize();

    // ref for sidebar to update in the dom
    const sidebar = useRef();

    return (
        <>
            {/* container to hold the Post titles */}
            <aside
                data-state='OPEN'
                style={{
                ...asideStyle,
                backgroundColor:neutral,
                ...(width<576? mobileAsideStyle:'')
                }}
                ref={sidebar}
            >
                    <Button
                        text='Load more'
                        color='black'
                        onClick={loadMore}
                        size='small'
                        style={{marginTop:'1em'}}
                        color={accent}
                    />
                    <PostList posts={allPosts}/>
            </aside>
            {/* this button on shows up on mobile devices, only reveals the aside when pressed */}
            {width < 576 
                ? <button
                    style={{...dropdownButtonStyle,backgroundColor:accent,color: new Color(accent).getContrast()}}
                    onClick={toggleDropdown}
                >
                    Posts
                </button>
                : null
            }
        </>
    )
}