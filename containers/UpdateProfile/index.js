import React, { Component } from "react";
import {
    Platform, Animated, Keyboard, View, StatusBar, Dimensions, Alert
} from "react-native";
import {
    Container, Content, Item, Input, Label, Text, Button
} from "native-base";
import validator from 'validator';

import { connect } from 'react-redux';
import Header2 from '../../components/Header2'
import { updateUserData } from './actions'
const win = Dimensions.get('window')

class UpdateProfile extends Component {

    state = {
        keyboardHeight: 0,
        name: this.props.user_data.name,
        contact: this.props.user_data.contact,
        email_id: this.props.user_data.email_id,
        address: this.props.user_data.address,
    }

    componentWillMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)

        this.keyboardHeight = new Animated.Value(0)
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

    onSubmitBtnPress = () => {
        const updatedUserData = {
            social_id: this.props.user_data.facebook_id,
            name: this.state.name,
            address: this.state.address,
            contact: this.state.contact,
            email_id: this.state.email_id
        }
        console.log("updateduserData", updatedUserData)

        if (!validator.isEmpty(updatedUserData.name) && validator.isNumeric(updatedUserData.contact) && updatedUserData.contact.length == 10) {
            this.props.updateUserData(updatedUserData, (success) => {
                console.log('success', success)
                if (success === 'true') {
                    // this.props.navigation.state.params.getUserInfo()
                    this.props.navigation.goBack()
                } else {
                    Alert.alert(
                        'Error 1',
                        'कृपया नंतर पुन्हा प्रयत्न करा',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false },
                    );
                }
            })
        }
        else {
            Alert.alert(
                'Error 2',
                'कृपया आपण टाकलेली माहिती तपासा आणि पुन्हा प्रयत्न करा',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }

    }


    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='प्रोफाईल' navigationProps={this.props.navigation} />
                <Content style={{ marginBottom: this.state.keyboardHeight }}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <Item disabled stackedLabel style={styles.ItemStyle}>
                            <Label>Name</Label>
                            <Input
                                autoFocus
                                value={this.state.name}
                                onChangeText={(name) => this.setState({ name })}
                            />
                        </Item>
                        <Item disabled stackedLabel style={styles.ItemStyle}>
                            <Label>Mobile Number</Label>
                            <Input
                                value={this.state.contact}
                                length={10}
                                onChangeText={(contact) => this.setState({ contact })}
                            />
                        </Item>
                        <Item disabled stackedLabel style={styles.ItemStyle}>
                            <Label>Address</Label>
                            <Input
                                multiline
                                value={this.state.address}
                                onChangeText={(address) => this.setState({ address })}
                            />
                        </Item>
                        <Button
                            style={styles.submitbtn}
                            onPress={this.onSubmitBtnPress}
                        >
                            <Text>जतन करा</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        );
    }
}

const styles = {
    submitbtn: {
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
        width: win.width * 0.8,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
};


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        user_data: state.auth.user_data
    }
}

export default connect(mapStateToProps, { updateUserData })(UpdateProfile)