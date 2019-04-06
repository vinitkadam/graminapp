import { SET_LOADING_WEATHER, SET_WEATHER_LIST } from "../../actions/types";

const INITIAL_STATE = {
    loading: true,
    weather_list: [],
    error: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING_WEATHER:
            return { ...state, loading: action.payload.loading, error: false };
            case SET_WEATHER_LIST:
            //console.log(action.payload);
            return { ...state, loading: action.payload.loading, error: action.payload.error, weather_list: action.payload.weather_list };
        default: 
            return state
    }
}