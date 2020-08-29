import { combineReducers } from 'redux';
import posts from './posts';
import modal from './modal';
import isLoggedIn from './isLoggedIn';

export default combineReducers({
    posts,
    modal,
    isLoggedIn,
})