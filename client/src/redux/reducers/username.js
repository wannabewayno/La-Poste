export default function(state = '', action) {
    switch(action.type){
        case'updateCurrentUser': {
            return action.payload;
        }
        default: return state;
    }
}