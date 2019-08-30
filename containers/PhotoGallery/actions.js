import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';
import { SET_LOADING_PHOTO_GALLERY, SET_PHOTO_GALLERY_LIST } from '../../actions/types';

export const getPhotoGalleryList = () => {
    return (dispatch) => {
        dispatch({ type: SET_LOADING_PHOTO_GALLERY, payload: { loading: true } });
        Service.get(Constants.DEV_SERVER + Constants.PHOTO_GALLERY, {})
            .then((response) => {
                if (response && response.status.toString() === '200') {
                    dispatch({ type: SET_PHOTO_GALLERY_LIST, payload: { loading: false, photo_gallery_list: response.data.data, error: false } })
                } else {
                    dispatch({ type: SET_PHOTO_GALLERY_LIST, payload: { loading: false, photo_gallery_list: [], error: true } })
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: SET_PHOTO_GALLERY_LIST, payload: { loading: false, photo_gallery_list: [], error: true } })
            })
    }
}