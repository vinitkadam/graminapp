import React, { Component } from "react";

import * as Expo from 'expo'

import {
    View,
    Text,
    StatusBar,
    Alert,
    Image,
    Dimensions,
    AsyncStorage
} from "react-native";
import {
    Container,
    Content,
    Button,
    Spinner,
} from "native-base";

import Axios from 'axios'

import Icons from 'react-native-vector-icons/Zocial'
import { connect } from 'react-redux'
import { setUserData } from '../actions'

const win = Dimensions.get('window');
logosize = win.width * 0.8;

class Login extends Component {

    state = {
        loading: true,
        loginDisabled: true,
        loginHidden: true,
    }


    componentDidMount() {
        this.checkLogin()
    }

    async logIn() {
        try {
            const {
                type,
                token
            } = await Expo.Facebook.logInWithReadPermissionsAsync('513584486082509', {
                permissions: ['public_profile', 'email']
            });

            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large),email`);
                const userData = await response.json()
                this.props.setUserData(userData);
                this.props.navigation.navigate('app');
            } else {
                Alert.alert(
                    'Error',
                    'Please try again later.',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                );
            }
        } catch ({ message }) {
            Alert.alert(
                'Error',
                'Please try again later.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }
    }

    checkLogin = async () => {
        let isLoggedIn = '';
        try {
            isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        }
        catch (e) {
            console.log('error')
        }
        console.log(isLoggedIn);
        if (isLoggedIn === 'true') {
            this.props.navigation.navigate('app');
        } else {
            this.setState({ loading: false })
        }
    }

    render() {
        return (
            <Container
                style={{
                    marginTop: StatusBar.currentHeight,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: '#ffce17',

                }}
            >
                <Image
                    style={{ width: logosize, height: logosize, borderRadius: logosize / 2 }}
                    source={require('../../../assets/icon.png')}
                />
                {this.state.loading && <Spinner />}
                {!this.state.loading
                    &&
                    <Button
                        onPress={() => this.logIn()}
                        style={{
                            alignSelf: 'center',
                            backgroundColor: '#3b5999',
                            paddingVertical: 15,
                            borderRadius: 10,
                            justifyContent: 'center'
                        }}
                    >
                        <Icons
                            name='facebook'
                            style={{ color: 'white', fontSize: 20, marginHorizontal: 10 }}
                        />
                        <Text style={{ paddingLeft: 5, paddingRight: 15, fontSize: 18, color: 'white' }}>Login with facebook</Text>
                    </Button>
                }
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        user_data: state.auth.user_data
    }
}

export default connect(mapStateToProps, { setUserData })(Login)