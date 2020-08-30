export default function(state = false, action) {
    switch(action.type){
        case'logIn':
            return true
        case'logOut':
            return false
        default: return state
    }
} 