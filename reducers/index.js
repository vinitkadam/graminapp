import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ThemeReducer from './ThemeReducer'
import EPaymentReducer from '../containers/EPayment/reducer'
import AboutVillage from '../containers/AboutVillage/reducer'
import Mandal from '../containers/Mandal/reducer'
import Weather from '../containers/Weather/reducer'
import PhotoGallery from '../containers/PhotoGallery/reducer'
import SearchUser from '../containers/PhotoGallery/reducer'
import Authreducer from '../containers/Auth/reducer'

const config = {
    key: 'primary',
    storage,
    whitelist: ['theme', 'auth']
};

export default persistCombineReducers(config, {
    theme: ThemeReducer,
    epayment: EPaymentReducer,
    about_village: AboutVillage,
    mandal: Mandal,
    weather: Weather,
    photo_gallery: PhotoGallery,
    search_users: SearchUser,
    auth: Authreducer
});
