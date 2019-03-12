const INITIAL_STATE = {
    theme: 'theme1'
}
import {
    SET_THEME
} from '../actions/types'

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_THEME:
            return { ...state, theme: action.payload };
        default:
            return state;
    }
}