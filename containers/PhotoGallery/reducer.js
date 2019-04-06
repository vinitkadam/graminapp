import { SET_LOADING_PHOTO_GALLERY, SET_PHOTO_GALLERY_LIST } from "../../actions/types";

const INITIAL_STATE = {
    loading: false,
    photo_gallery_list: [],
    error: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING_PHOTO_GALLERY:
            return { ...state, loading: action.payload.loading, error: false };
            case SET_PHOTO_GALLERY_LIST:
            //console.log(action.payload);
            return { ...state, loading: action.payload.loading, error: action.payload.error, photo_gallery_list: action.payload.photo_gallery_list };
        default: 
            return state
    }
}