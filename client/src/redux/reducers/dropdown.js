export default function(state = 'CLOSED', action ) {
    switch(action.type){
        case'closeDropdown':{
            return 'CLOSED'
        }
        case'openDropdown':{
            return 'OPEN'
        }
        default: return state;
    }
}