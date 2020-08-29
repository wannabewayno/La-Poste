export default function(state = 'CLOSED', action ) {
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