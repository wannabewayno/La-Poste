export default function(state = 'OPEN', action ) {
    switch(action.type){
        case'closeModal':{
            return 'CLOSED'
        }
        case'openModal':{
            return 'OPEN'
        }
        default: return state;
    }
}