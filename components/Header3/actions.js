import {
    SET_THEME
} from '../../actions/types'

export const setTheme = (text) => {
    return {
        type: SET_THEME,
        payload: text
    };
};