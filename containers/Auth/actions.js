import { AsyncStorage } from 'react-native'
import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';
import { SET_USER_DATA_LOADING, SET_USER_DATA_LOGIN } from '../../actions/types';

export const setUserData = (userData) => {
    return (dispatch) => {
        const storedUserData = {
            social_id: userData.id,
            email_id: userData.email,
            name: userData.name,
            profile_img: userData.picture.data.url
        }
        dispatch({ type: SET_USER_DATA_LOADING, payload: { loading: true, error: false } });

        Service.post(Constants.DEV_SERVER + Constants.SET_USER_DATA, {
            data: storedUserData
        })
            .then((response) => {
                if (response && response.status.toString() === '200') {
                    dispatch({ type: SET_USER_DATA_LOGIN, payload: { loading: false, user_data: storedUserData, error: false } })
                    AsyncStorage.setItem('isLoggedIn', 'true');
                    AsyncStorage.setItem('facebook_id', userData.id)
                } else {
                    dispatch({ type: SET_USER_DATA_LOGIN, payload: { loading: false, user_data: storedUserData, error: true } })
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: SET_USER_DATA_LOADING, payload: { loading: false, error: true } })
            })
    }
}