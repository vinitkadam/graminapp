import React, { Component } from 'react';
// import codePush from 'react-native-code-push';
// import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';
import { Font, AppLoading } from "expo";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fontLoading: true, // to load font in expo      
    };
  } 

  // componentDidMount() {
  //   SplashScreen.hide()
  // }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });   
    this.setState({ fontLoading: false });
}


  render() {
    const store = createStore(
      reducers,
      {},
      compose(
        applyMiddleware(ReduxThunk),
      )
    );

    persistStore(store, null, () => { store.getState(); });
    
    if (this.state.fontLoading) {
        return (            
          <AppLoading />        
        );
      }else{
        return (
          <Provider store={store}>
            <Router />
          </Provider>
        );
      }
    }
    
}

// App = codePush(
//   { 
//     checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//     installMode: codePush.InstallMode.ON_NEXT_RESUME
//   }
// )(App);

export default App;
