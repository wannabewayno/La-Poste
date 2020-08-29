export default function(state = false, action) {
    switch(action.type){
        case'startFetchingPosts':{
            return true
        }
        case'stopFetchingPosts':{
            return false
        }
        default: return state;
    }
}