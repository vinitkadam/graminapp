import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';
import { SET_EPAYMENT_LIST, SET_LOADING_EPAYMENTS } from '../../actions/types';

export const getPaymentList = () => {
    return (dispatch) => {
        dispatch({ type: SET_LOADING_EPAYMENTS, payload: { loading: true } });
        Service.get(Constants.DEV_SERVER + Constants.EPAYMENT_LIST,{

        })
        .then((response) => {
            if(response && response.status.toString() === '200') {
                dispatch({ type: SET_EPAYMENT_LIST, payload: { loading: false, epayment_list: response.data, error: false } })
            } else {
                dispatch({ type: SET_EPAYMENT_LIST, payload: { loading: false, epayment_list: [], error: true } })
            }
        })
        .catch((error) => {
            console.log(error)
            dispatch({ type: SET_EPAYMENT_LIST, payload: { loading: false, epayment_list: [], error: true } })
        })
    }
}