import { palettes } from '../../content';

export default function(state = palettes.driftwood, action) {
    switch(action.type){
        case'updateColorScheme':{
            console.log('being hit');
            return palettes[action.payload]
        }
        default: return state;
    }
}