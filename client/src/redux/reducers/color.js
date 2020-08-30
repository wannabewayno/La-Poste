import { palettes } from '../../content';

export default function(state = palettes.driftwood, action) {
    switch(action.type){
        case'updateColorScheme':{
            return palettes[action.payload]
        }
        default: return state;
    }
}