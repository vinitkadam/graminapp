import { SET_LOADING_EPAYMENTS, SET_EPAYMENT_LIST } from "../../actions/types";

const INITIAL_STATE = {
    loading: false,
    epayment_list: [],
    error: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING_EPAYMENTS:
            return { ...state, loading: action.payload.loading, error: false };
            case SET_EPAYMENT_LIST:
            //console.log(action.payload);
            return { ...state, loading: action.payload.loading, error: action.payload.error, epayment_list: action.payload.epayment_list };
        default: 
            return state
    }
}