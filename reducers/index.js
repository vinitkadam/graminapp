import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ThemeReducer from './ThemeReducer'
import EPaymentReducer from '../containers/EPayment/reducer'
import AboutVillage from '../containers/AboutVillage/reducer'

const config = {
    key: 'primary',
    storage,
    whitelist: ['theme']
};

export default persistCombineReducers(config, {
    theme: ThemeReducer,
    epayment: EPaymentReducer,
    about_village: AboutVillage
});
