import { SET_LOADIND_SEARCH_USER, SET_SEARCH_USER_LIST } from "../../actions/types";

const INITIAL_STATE = {
    loading: false,
    search_users_list: [],
    error: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADIND_SEARCH_USER:
            return { ...state, loading: action.payload.loading, error: false };
        case SET_SEARCH_USER_LIST:
            console.log("from reducer", action.payload.search_users_list);
            return { ...state, loading: action.payload.loading, error: action.payload.error, search_users_list: action.payload.about_village_notifications };
        default:
            return state
    }
}