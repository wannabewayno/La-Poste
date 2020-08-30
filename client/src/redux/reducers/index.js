import { combineReducers } from 'redux';
import posts from './posts';
import modal from './modal';
import dropdown from './dropdown';
import isLoggedIn from './isLoggedIn';
import isFetchingPosts from './isFetchingPosts';
import username from './username';
import color from './color';

export default combineReducers({
    posts,
    modal,
    isLoggedIn,
    isFetchingPosts,
    username,
    color,
    dropdown,
})