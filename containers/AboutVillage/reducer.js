import { SET_LOADING_ABOUT_VILLAGE_NOTIFICATONS, SET_ABOUT_VILLAGE_NOTIFICATIONS } from "../../actions/types";

const INITIAL_STATE = {
    loading: false,
    about_village_notifications: [],
    error: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING_ABOUT_VILLAGE_NOTIFICATONS:
            return { ...state, loading: action.payload.loading, error: false };
            case SET_ABOUT_VILLAGE_NOTIFICATIONS:
            //console.log(action.payload);
            return { ...state, loading: action.payload.loading, error: action.payload.error, about_village_notifications: action.payload.about_village_notifications };
        default: 
            return state
    }
}