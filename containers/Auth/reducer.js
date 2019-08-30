import { SET_USER_DATA_LOADING, SET_USER_DATA_LOGIN, SET_USER_DATA_PROFILE, UPDATE_USER_DATA_LOADING, UPDATE_USER_DATA, LOGOUT } from "../../actions/types";

const INITIAL_STATE = {
    loading: null,
    user_data: {
        id: "",
        facebook_id: "",
        name: "",
        email_id: "",
        contact: "",
        img_url: "",
        address: "",
        date_created: ""
    },
    error: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_DATA_LOADING:
            return { ...state, loading: action.payload.loading, error: false };
        case SET_USER_DATA_LOGIN:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error,
                user_data: {
                    ...state.user_data,
                    facebook_id: action.payload.user_data.social_id,
                    name: action.payload.user_data.name,
                    img_url: action.payload.user_data.profile_img,
                    email_id: action.payload.user_data.email_id
                }
            };
        case SET_USER_DATA_PROFILE:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error,
                user_data: action.payload.user_data
            }
        case UPDATE_USER_DATA_LOADING: {
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error
            }
        }
        case UPDATE_USER_DATA: {
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error,
                user_data: action.payload.user_data
            }
        }
        case LOGOUT: {
            return {
                ...INITIAL_STATE
            }
        }
        default:
            return state
    }
}