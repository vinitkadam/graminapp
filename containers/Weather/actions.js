import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';
import { SET_LOADING_WEATHER, SET_WEATHER_LIST } from '../../actions/types';

export const getWeatherList = () => {
    return (dispatch) => {
        dispatch({ type: SET_LOADING_WEATHER, payload: { loading: true, error: false } });
        Service.get(Constants.DEV_SERVER + Constants.WEATHER_LIST,{
        })
        .then((response) => {
            if(response && response.status.toString() === '200') {
                dispatch({ type: SET_WEATHER_LIST, payload: { loading: false, weather_list: response.data, error: false } })
            } else {
                dispatch({ type: SET_WEATHER_LIST, payload: { loading: false, weather_list: [], error: true } })
            }
        })
        .catch((error) => {
            console.log(error)
            dispatch({ type: SET_WEATHER_LIST, payload: { loading: false, weather_list: [], error: true } })
        })
    }
}