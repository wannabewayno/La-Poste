export default function(state = {}, action) {
    switch(action.type){
        case 'updateCurrentPost': {
            const postId = action.payload;
            const currentPost = state.allPosts.find(post => post.id === postId)
            return {...state, currentPost };
        }
        case 'updateAllPosts'   : {
            const allPosts = action.payload;
            return {... state, allPosts }
        };
        default:  return {...state };
    }
}