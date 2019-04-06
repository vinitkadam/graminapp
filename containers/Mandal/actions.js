import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';
import { SET_LOADING_MANDAL, SET_MANDAL_LIST } from '../../actions/types';

export const getMandalList = () => {
    return (dispatch) => {
        dispatch({ type: SET_LOADING_MANDAL, payload: { loading: true, error: false } });
        Service.get(Constants.DEV_SERVER + Constants.MANDAL_LIST,{
        })
        .then((response) => {
            if(response && response.status.toString() === '200') {
                dispatch({ type: SET_MANDAL_LIST, payload: { loading: false, mandal_list: response.data, error: false } })
            } else {
                dispatch({ type: SET_MANDAL_LIST, payload: { loading: false, mandal_list: [], error: true } })
            }
        })
        .catch((error) => {
            console.log(error)
            dispatch({ type: SET_MANDAL_LIST, payload: { loading: false, mandal_list: [], error: true } })
        })
    }
}