import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, ListItem, Row, View, Col } from 'native-base'
import { connect } from 'react-redux'
import { DrawerActions } from 'react-navigation-drawer';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import { colors } from '../../colors'
import { setTheme } from './actions'
import EntypoIcon from '@expo/vector-icons/Entypo'
import AntDesignIcon from '@expo/vector-icons/AntDesign'
import MaterialComunityIcons from '@expo/vector-icons/MaterialCommunityIcons'


class Header3 extends Component {
    render() {
        let theme = colors[this.props.theme]
        return (
            <Header style={{ backgroundColor: theme.themeColor }}>
                <Left>
                    <Button transparent onPress={() => { this.props.navigationProps.dispatch(DrawerActions.toggleDrawer()) }}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{`${this.props.title}`}</Title>
                </Body>
                <Right>
                    <Button transparent style={{ marginLeft: 0, paddingLeft: 10, marginRight: 0, paddingRight: 5 }} >
                        <EntypoIcon name='facebook-with-circle' style={{ color: 'white' }} size={30} />
                    </Button>
                    {/* <Button
                        transparent
                        style={{ marginLeft: 0, paddingLeft: 10, marginRight: 0, paddingRight: 5 }}
                        onPress={() => { this.props.navigationProps.navigate('search_user') }}
                    >
                        <MaterialComunityIcons name='account-search' style={{ color: 'white' }} size={30} />
                    </Button> */}
                    <Menu>
                        <MenuTrigger style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button disabled transparent>
                                <Icon name='md-more' style={{ color: 'white', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} />
                            </Button>
                        </MenuTrigger>
                        <MenuOptions>
                            <ListItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Row>
                                    <Text style={[{ paddingVertical: 5 }, styles.popupText]}>कलर थीम बदला</Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button transparent onPress={() => this.props.setTheme('theme1')}>
                                            <View style={{ backgroundColor: colors.theme1.themeColor, width: 25, height: 25 }} />
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button transparent onPress={() => this.props.setTheme('theme2')}>
                                            <View style={{ backgroundColor: colors.theme2.themeColor, width: 25, height: 25 }} />
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button transparent onPress={() => this.props.setTheme('theme3')}>
                                            <View style={{ backgroundColor: colors.theme3.themeColor, width: 25, height: 25 }} />
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button transparent onPress={() => this.props.setTheme('theme4')}>
                                            <View style={{ backgroundColor: colors.theme4.themeColor, width: 25, height: 25 }} />
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button transparent onPress={() => this.props.setTheme('theme5')}>
                                            <View style={{ backgroundColor: colors.theme5.themeColor, width: 25, height: 25 }} />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListItem>
                            <MenuOption onSelect={() => { this.props.navigationProps.navigate('about_app') }}>
                                <ListItem disabled>
                                    <Text style={styles.popupText}>अँप माहिती</Text>
                                </ListItem>
                            </MenuOption>
                            <MenuOption onSelect={() => { this.props.navigationProps.navigate('contactus') }} >
                                <ListItem disabled>
                                    <Text style={styles.popupText}>संपर्क</Text>
                                </ListItem>
                            </MenuOption>
                            <MenuOption onSelect={() => { this.props.navigationProps.navigate('terms_and_conditions') }} >
                                <ListItem disabled>
                                    <Text style={styles.popupText}>नियम व अटी</Text>
                                </ListItem>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`Playstore link`)} >
                                <ListItem disabled noBorder>
                                    <Text style={styles.popupText}>आम्हाला स्टार द्या</Text>
                                </ListItem>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </Right>
            </Header>
        )
    }
}

const styles = {
    popupText: {
        fontSize: 14,
        textAlign: 'left',
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps, { setTheme })(Header3);