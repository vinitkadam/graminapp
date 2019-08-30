import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';
import { UPDATE_USER_DATA_LOADING, UPDATE_USER_DATA } from '../../actions/types';

export const updateUserData = (userData, callback) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_USER_DATA_LOADING, payload: { loading: true, error: false } });
        console.log("payload", userData)
        Service.post(Constants.DEV_SERVER + Constants.UPDATE_USER_DATA, {
            data: userData
        })
            .then((response) => {
                if (response && response.status.toString() === '200') {
                    console.log(response.data.data[0])
                    console.log('success 1')
                    dispatch({ type: UPDATE_USER_DATA, payload: { loading: false, user_data: response.data.data[0], error: false } })
                    callback('true')
                } else {
                    console.log('success 2')
                    dispatch({ type: UPDATE_USER_DATA, payload: { loading: false, user_data: response.data.data[0], error: true } })
                    callback('false')
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: UPDATE_USER_DATA_LOADING, payload: { loading: false, error: true } })
                callback('false')
            })
    }
}