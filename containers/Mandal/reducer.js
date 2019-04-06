import { SET_LOADING_MANDAL, SET_MANDAL_LIST } from "../../actions/types";

const INITIAL_STATE = {
    loading: true,
    mandal_list: [],
    error: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING_MANDAL:
            return { ...state, loading: action.payload.loading, error: false };
            case SET_MANDAL_LIST:
            //console.log(action.payload);
            return { ...state, loading: action.payload.loading, error: action.payload.error, mandal_list: action.payload.mandal_list };
        default: 
            return state
    }
}