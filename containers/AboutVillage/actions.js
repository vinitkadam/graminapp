import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';
import { SET_LOADING_ABOUT_VILLAGE_NOTIFICATONS, SET_ABOUT_VILLAGE_NOTIFICATIONS } from '../../actions/types';

export const getAboutVillageNotifications = () => {
    return (dispatch) => {
        dispatch({ type: SET_LOADING_ABOUT_VILLAGE_NOTIFICATONS, payload: { loading: true } });
        Service.get(Constants.DEV_SERVER + Constants.ABOUT_VILLAGE_NOTIFICATIONS, {})
        .then((response) => {
            if(response && response.status.toString() === '200') {
                console.log(response)
                dispatch({ type: SET_ABOUT_VILLAGE_NOTIFICATIONS, payload: { loading: false, about_village_notifications: response.data.data, error: false } })
            } else {
                dispatch({ type: SET_EPAYMENT_LIST, payload: { loading: false, about_village_notifications: [], error: true } })
            }
        })
        .catch((error) => {
            console.log(error)
            dispatch({ type: SET_EPAYMENT_LIST, payload: { loading: false, about_village_notifications: [], error: true } })
        })
    }
}