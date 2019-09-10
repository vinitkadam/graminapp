import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem, View, Left, Body, Right, Row } from "native-base";
import { connect } from 'react-redux'
import Ionicons from '@expo/vector-icons/Ionicons'

import { colors } from '../colors'
class SideBar extends React.Component {
    getTintColor = (theme, routeName) => {
        const tintColor = this.props.activeItemKey === routeName ? theme.themeColor : '#7d7d7d'
        return tintColor
    }
    render() {
        let theme = colors[this.props.theme]
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Content>
                    <View style={{ backgroundColor: theme.themeColor, width: '100%', height: 160, justifyContent: 'center', paddingLeft: 30 }}>
                        <Row style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate('profile')}>
                            <Image
                                source={{ uri: this.props.user_data.img_url }}
                                style={{ height: 80, width: 80, borderRadius: 40 }}
                            />
                            <Text style={{ fontSize: 20, lineHeight: 20, paddingLeft: 20, color: 'white' }}>{this.props.user_data.name}</Text>
                        </Row>
                    </View>
                    <ListItem
                        button
                        onPress={() => this.props.navigation.navigate('homestack')}
                        style={{ paddingTop: 25, paddingBottom: 25 }}
                    >
                        <View style={{ width: 40 }}>
                            <Image source={require('../assets/icons/home.png')} tintColor={this.getTintColor(theme, 'homestack')} />
                        </View>
                        <Text style={{ color: this.getTintColor(theme, 'homestack') }}>{'माझे गाव'}</Text>
                    </ListItem>
                    <ListItem
                        button
                        onPress={() => this.props.navigation.navigate('weather')}
                        style={{ paddingTop: 25, paddingBottom: 25 }}
                    >
                        <View style={{ width: 40 }}>
                            <Ionicons name='ios-partly-sunny' size={25} color={this.getTintColor(theme, 'weather')} />
                        </View>
                        <Text style={{ color: this.getTintColor(theme, 'weather') }}>{'हवामान '}</Text>
                    </ListItem>
                    <ListItem
                        button
                        onPress={() => this.props.navigation.navigate('profile')}
                        style={{ paddingTop: 25, paddingBottom: 25 }}
                    >
                        <View style={{ width: 40 }}>
                            <Ionicons name='ios-person' size={25} color={this.getTintColor(theme, 'profile')} />
                        </View>
                        <Text style={{ color: this.getTintColor(theme, 'profile') }}>{'प्रोफाईल'}</Text>
                    </ListItem>

                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        user_data: state.auth.user_data
    };
};

export default connect(mapStateToProps)(SideBar)