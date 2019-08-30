import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';
import { AsyncStorage } from 'react-native'
import { SET_USER_DATA_LOADING, SET_USER_DATA_PROFILE, LOGOUT } from '../../actions/types';

export const getUserData = (fbid) => {
    return (dispatch) => {
        dispatch({ type: SET_USER_DATA_LOADING, payload: { loading: true, error: false } });

        Service.get(Constants.DEV_SERVER + Constants.GET_USER_DATA + fbid, {})
            .then((response) => {
                if (response && response.status.toString() === '200') {
                    console.log(response.data.data[0])
                    dispatch({ type: SET_USER_DATA_PROFILE, payload: { loading: false, user_data: response.data.data[0], error: false } })
                } else {
                    dispatch({ type: SET_USER_DATA_PROFILE, payload: { loading: false, user_data: response.data.data[0], error: true } })
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: SET_USER_DATA_LOADING, payload: { loading: false, error: true } })
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        AsyncStorage.removeItem('isLoggedIn')
        AsyncStorage.removeItem('facebook_id')
        dispatch({ type: LOGOUT, payload: { user_dat: null } });
    }
}