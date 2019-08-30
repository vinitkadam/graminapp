import React, { Component } from 'react';
import { Platform, Animated, Keyboard, View, Image, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Text, Icon, Button, Spinner } from 'native-base';
import { connect } from 'react-redux'
import { getUserData, logout } from './actions'

import Header3 from '../../components/Header3'
class Profile extends Component {

    state = {
        loading: true,
        keyboardHeight: 0,
        disabled: true,
        error: false,
    }

    componentWillMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)

        this.keyboardHeight = new Animated.Value(0)
    }

    componentDidMount() {
        this.getUserInfo()
    }




    keyboardWillShow = (event) => {
        if (Platform.OS == 'android') { duration = 100 }
        else { duration = event.duration }
        this.setState({ keyboardHeight: event.endCoordinates.height })
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: event.endCoordinates.height + 10
            })
        ]).start()
    }

    keyboardWillHide = (event) => {
        if (Platform.OS == 'android') { duration = 100 }
        else { duration = event.duration }
        this.setState({ keyboardHeight: 0 })
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: 10
            })
        ]).start()
    }

    getUserInfo = async () => {
        let facebook_id = ''
        try {
            facebook_id = await AsyncStorage.getItem('facebook_id')
        } catch (e) {
            console.log('error')
        }
        if (facebook_id !== '') {
            this.props.getUserData(facebook_id)
            this.setState({ loading: false, error: false })
        } else {
            this.setState({ loading: false, error: true })
        }

    }

    renderTopRightButton() {
        return (
            <Button
                onPress={() => { this.props.navigation.navigate('update_profile', { refreshFunction: this.getUserInfo }) }}
                style={{ alignItems: 'center', justifyContent: 'center', width: 60, alignSelf: 'flex-end', padding: 0, margin: 5, backgroundColor: 'white', backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 20 }}
            >
                <Icon name="create" style={{ color: 'black' }} />
            </Button>
        );
    }

    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header3 title='Profile' navigationProps={this.props.navigation} />
                {this.state.loading && <Spinner />}
                {this.state.error && <Text>Error loading profile.</Text>}
                {!this.state.loading &&
                    <Content style={{ marginBottom: this.state.keyboardHeight }}>
                        <View style={styles.topBackground} >
                            {this.renderTopRightButton()}
                        </View>
                        <Image
                            style={styles.dp}
                            source={{ uri: this.props.user_data.img_url }}
                        />

                        <View style={{ padding: 15 }}>
                            <Item disabled stackedLabel style={styles.ItemStyle}>
                                <Label>Name</Label>
                                <Input
                                    disabled={this.state.disabled}
                                    value={this.props.user_data.name}
                                />
                            </Item>
                            <Item disabled stackedLabel style={styles.ItemStyle}>
                                <Label>Mobile Number</Label>
                                <Input
                                    disabled={this.state.disabled}
                                    value={this.props.user_data.contact}
                                />
                            </Item>
                            <Item disabled stackedLabel style={styles.ItemStyle}>
                                <Label>Email</Label>
                                <Input
                                    disabled={this.state.disabled}
                                    value={this.props.user_data.email_id}
                                />
                            </Item>
                            <Item disabled stackedLabel style={styles.ItemStyle}>
                                <Label>Address</Label>
                                <Input
                                    multiline
                                    disabled={this.state.disabled}
                                    value={this.props.user_data.address}
                                />
                            </Item>

                            <TouchableOpacity
                                style={styles.logoutButton}
                                onPress={() => { this.props.logout(); this.props.navigation.navigate('auth') }}
                            >
                                <Text style={styles.logoutText}>Logout</Text>
                                <Icon name="ios-log-out" style={styles.logoutIcon} />
                            </TouchableOpacity>
                        </View>

                    </Content>
                }
            </Container>
        );
    }
}

const styles = {
    //header styles
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
    },
    iconContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 26,
    },
    iconStyle: {
        marginBottom: 10,
        paddingRight: 20,
        color: 'white',
    },
    topRightButton: {
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        padding: 6,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 5,
        alignSelf: 'flex-end',
        backgroundColor: 'red',
    },


    //rest of styles
    container: {
        backgroundColor: 'white'
    },
    topBackground: {

        backgroundColor: 'white',
        height: 80,
    },
    dp: {
        height: 120,
        width: 120,
        zIndex: 10,
        alignSelf: 'center',
        borderRadius: 60,
        marginTop: -60,
    },
    ItemStyle: {
        marginTop: 10
    },
    logoutButton: {
        fontWeight: 'bold',
        marginTop: 30,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    logoutText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
        alignSelf: 'center',
    },
    logoutIcon: {
        color: 'red',
        marginLeft: 10,
    }
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        user_data: state.auth.user_data
    }
}

export default connect(mapStateToProps, { getUserData, logout })(Profile)