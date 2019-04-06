import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem, View, Left, Body, Right, Row } from "native-base";
import { connect } from 'react-redux'
import Octicons from '@expo/vector-icons/Octicons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
const routes = [
    {
        routeName: 'homestack',
        routeTitle: 'Home',
        icon: '../assets/icons/home.png'
    },
    {
        routeName: 'education',
        routeTitle: 'Education',
        icon: '../assets/icons/scholar.png'
    },
    {
        routeName: 'health',
        routeTitle: 'Health',
        icon: '../assets/icons/stethoscope.png'
    },
    {
        routeName: 'schemes',
        routeTitle: 'Schemes',
        icon: '../assets/icons/businessman-in-apresentation-with-a-graphic-on-a-board.png'
    }
]
import { colors } from '../colors'
class SideBar extends React.Component {
    getTintColor = (theme, routeName) => {
        const tintColor = this.props.activeItemKey === routeName  ? theme.themeColor : '#7d7d7d'
        return tintColor
    }
    render() {
        let theme = colors[this.props.theme]
        return (
        <Container style={{ marginTop: StatusBar.currentHeight }}>
            <Content>
            <View style={{ backgroundColor: theme.themeColor, width: '100%', height: 160, justifyContent: 'center', paddingLeft: 30 }}>
                <Row style={{ alignItems: 'center' }}>
                    <FontAwesome name='user-circle-o' style={{ fontSize: 70, color: 'white' }}  />
                    <Text style={{ fontSize: 20, lineHeight: 20, paddingLeft: 20, color: 'white' }}>Name</Text>
                </Row>
            </View>
            {/* <List
                dataArray={routes}
                renderRow={data => {
                return (
                    <ListItem
                    button
                    onPress={() => this.props.navigation.navigate(data.routeName)}>
                    <Image source={require(data.icon)} />
                    <Text>{data.routeTitle}</Text>
                    </ListItem>
                );
                }}
            /> */}
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
                {/* <ListItem
                    button
                    onPress={() => this.props.navigation.navigate('education')}
                    style={{ paddingTop: 25, paddingBottom: 25 }}    
                >
                    <View style={{ width: 40 }}>
                    <Image source={require('../assets/icons/scholar.png')} tintColor={this.getTintColor(theme, 'education')} />
                    </View>
                    <Text style={{ color: this.getTintColor(theme, 'education') }}>{'Education'}</Text>
                </ListItem> */}
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
                {/* <ListItem
                    button
                    onPress={() => this.props.navigation.navigate('health')}
                    style={{ paddingTop: 25, paddingBottom: 25 }}
                >
                    <View style={{ width: 40 }}>
                    <Image source={require('../assets/icons/stethoscope.png')} tintColor={this.getTintColor(theme, 'health')} />
                    </View>
                    <Text style={{ color: this.getTintColor(theme, 'health') }}>{'Health'}</Text>
                </ListItem>
                <ListItem
                    button
                    onPress={() => this.props.navigation.navigate('schemes')}
                    style={{ paddingTop: 25, paddingBottom: 25 }}
                >
                    <View style={{ width: 40 }}>
                    <Image source={require('../assets/icons/businessman-in-apresentation-with-a-graphic-on-a-board.png')} tintColor={this.getTintColor(theme, 'schemes')} />
                    </View>
                    <Text style={{ color: this.getTintColor(theme, 'schemes') }}>{'Schemes'}</Text>
                </ListItem> */}
            </Content>
        </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(SideBar)

{/* <ListItem icon
                    button
                    onPress={() => this.props.navigation.navigate('homestack')}>
                    <Left>
                    <Image source={require('../assets/icons/home.png')} tintColor={theme.themeColor} />
                    </Left>
                    <Body>
                    <Text>{'Home'}</Text>
                    </Body>
                </ListItem>
                <ListItem icon
                    button
                    onPress={() => this.props.navigation.navigate('education')}>
                    <Left>
                    <Image source={require('../assets/icons/scholar.png')} tintColor={theme.themeColor} />
                    </Left>
                    <Body>
                    <Text>{'Education'}</Text>
                    </Body>
                </ListItem>
                <ListItem icon
                    button
                    onPress={() => this.props.navigation.navigate('health')}>
                    <Left>
                    <Image source={require('../assets/icons/stethoscope.png')} tintColor={theme.themeColor} />
                    </Left>
                    <Body>
                    <Text>{'Health'}</Text>
                    </Body>
                </ListItem>
                <ListItem icon
                    button
                    onPress={() => this.props.navigation.navigate('schemes')}>
                    <Left>
                    <Image source={require('../assets/icons/businessman-in-apresentation-with-a-graphic-on-a-board.png')} tintColor={theme.themeColor} />
                    </Left>
                    <Body>
                    <Text>{'Schemes'}</Text>
                    </Body>
                </ListItem> */}