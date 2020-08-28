export default function(state = {}, action) {
    switch(action.type){
        case 'updateCurrentPost': return {...state, currentPost: action.payload };
        case 'updateAllPosts'   : return {... state, posts: action.payload };
        default:  return {...state };
    }
}