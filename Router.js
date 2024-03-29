import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';
import { Constants } from 'expo';

import Icon from '@expo/vector-icons/Ionicons'

import HomeScreen from './containers/HomeScreen'
import PhotoGallery from './containers/PhotoGallery';
import Videos from './containers/Videos';
import EPayment from './containers/EPayment';
import Drawer from './components/Drawer'
import AboutVillage from './containers/AboutVillage';
import ContactUs from './containers/ContactUs';
import AboutApp from './containers/AboutApp';
import TermsAndConditions from './containers/TermsAndConditions';
import ImportantContactNo from './containers/ImportantContactNo';
import Weather from './containers/Weather';
import Mandal from './containers/Mandal';
import DisplayPhotoGrid from './containers/DisplayPhotoGrid';
import DisplayImage from './containers/DisplayImage';
import Login from './containers/Auth/Login';
import Profile from './containers/Profile';
import SearchUSer from './containers/SearchUser'
import UpdateProfile from './containers/UpdateProfile';

const HomeStackNavigator = createStackNavigator({
  home: {
    screen: HomeScreen,
  },
  aboutvillage: {
    screen: AboutVillage
  },
  photogallery: {
    screen: PhotoGallery
  },
  displayPhotoGrid: {
    screen: DisplayPhotoGrid
  },
  displayImage: {
    screen: DisplayImage
  },
  videos: {
    screen: Videos
  },
  mandal: {
    screen: Mandal
  },
  search_user: {
    screen: SearchUSer
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const ProfileStackNavigator = createStackNavigator({
  profile_screen: {
    screen: Profile,
  },
  update_profile: {
    screen: UpdateProfile
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  homestack: {
    screen: HomeStackNavigator
  },
  weather: {
    screen: Weather
  },
  profile: {
    screen: ProfileStackNavigator
  }
}, {
  contentComponent: props => <Drawer {...props} />,
  // initialRouteName: 'profile'
}
);

const AppStackNavigator = createStackNavigator({
  home_drawer: AppDrawerNavigator,
  contactus: ContactUs,
  about_app: AboutApp,
  terms_and_conditions: TermsAndConditions,
  important_contact_no: ImportantContactNo
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});


const MainNavigator = createSwitchNavigator({
  auth: Login,
  app: AppStackNavigator,
},
  {
    headerMode: 'none',
    // initialRouteName: 'app'
  });

const RouterContainer = createAppContainer(MainNavigator)

export default RouterContainer;