export default function(state = 'CLOSED', action ) {
    switch(action.type){
        case'closeModal':{
            console.log('closing modal');
            return 'CLOSED'
        }
        case'openModal':{
            console.log('opening modal');
            return 'OPEN'
        }
        default: return state;
    }
}