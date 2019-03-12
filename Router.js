import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { 
    createStackNavigator, 
    createBottomTabNavigator,
    createSwitchNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

import Icon from '@expo/vector-icons/Ionicons'

import HomeScreen from './containers/HomeScreen'
import GPSamiti from './containers/GPSamiti'
import GPEmployee from './containers/GPEmployee'
import RationCard from './containers/RationCard';
import Certificates from './containers/Certificates';
import TaxPayment from './containers/TaxPayment';
import PhotoGallery from './containers/PhotoGallery';
import Videos from './containers/Videos';
import EPayment from './containers/EPayment';
import Education from './containers/Education'
import Health from './containers/Health';
import Schemes from './containers/Schemes';

const HomeStackNavigator = createStackNavigator({
  home: {
    screen: HomeScreen,
  },
  gpsamiti: {
    screen: GPSamiti
  },
  gpemployee: {
    screen: GPEmployee
  },
  rationcard: {
    screen: RationCard
  },
  certificates: {
    screen: Certificates
  },
  taxpayment: {
    screen: TaxPayment
  },
  photogallery: {
    screen: PhotoGallery
  },
  videos: {
    screen: Videos
  },
  epayment: {
    screen: EPayment
  }
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  homestack: {
    screen: HomeStackNavigator 
  },
  education: {
    screen: Education
  },
  health: {
    screen: Health
  },
  schemes: {
    screen: Schemes
  }
});


const MainNavigator = createSwitchNavigator({
  app: AppDrawerNavigator,
},
{
  headerMode: 'none',
  initialRouteName: 'app'
});

const RouterContainer = createAppContainer(MainNavigator)

export default RouterContainer;