import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';
import { SET_LOADIND_SEARCH_USER, SET_SEARCH_USER_LIST } from '../../actions/types';

export const getSearchUsersList = (text) => {
    return (dispatch) => {
        dispatch({ type: SET_LOADIND_SEARCH_USER, payload: { loading: true } });
        Service.get(Constants.DEV_SERVER + Constants.SEARCH_USER + '?q=' + text, {})
            .then((response) => {
                if (response && response.status.toString() === '200') {
                    console.log(response.data.data)
                    dispatch({ type: SET_SEARCH_USER_LIST, payload: { loading: false, search_users_list: response.data.data, error: false } })
                } else {
                    dispatch({ type: SET_SEARCH_USER_LIST, payload: { loading: false, search_users_list: [], error: true } })
                }
            })
            .catch((error) => {
                // console.log(error)
                dispatch({ type: SET_SEARCH_USER_LIST, payload: { loading: false, search_users_list: [], error: true } })
            })
    }
}