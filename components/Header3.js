import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button,Icon, Title,Text } from 'native-base'
import { connect } from 'react-redux'
import { DrawerActions } from 'react-navigation-drawer';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import { colors } from '../colors'
import EntypoIcon from '@expo/vector-icons/Entypo'
import AntDesignIcon from '@expo/vector-icons/AntDesign'


class Header3 extends Component {
    render() {
        let theme = colors[this.props.theme]  
        return(
            <Header style={{ backgroundColor: theme.themeColor}}>
                <Left>
                    <Button transparent onPress={() => { this.props.navigationProps.dispatch(DrawerActions.toggleDrawer()) }}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{`${this.props.title}`}</Title>
                </Body>
                <Right>
                    <Button transparent style={{ marginLeft: 0, paddingLeft: 10, marginRight: 0, paddingRight: 5 }}>
                        <EntypoIcon name='facebook-with-circle' style={{ color: 'white'}} size={30} />
                    </Button>
                    <Button transparent style={{ marginLeft: 0, paddingLeft: 10, marginRight: 0, paddingRight: 5 }}>
                        <AntDesignIcon name='contacts' style={{ color: 'white'}} size={30} />
                    </Button>
                    <Button transparent style={{ marginLeft: 0, paddingLeft: 10, marginRight: 0, paddingRight: 0 }}>
                        <Icon name='md-megaphone' style={{ color: 'white'}} size={30} />
                    </Button>
                    <Menu>
                        <MenuTrigger style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button disabled transparent>
                                <Icon name='md-more' style={{ color: 'white', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}/>
                            </Button>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                            <MenuOption onSelect={() => alert(`Delete`)} >
                                <Text style={{color: 'red'}}>Delete</Text>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                        </MenuOptions>
                    </Menu>
                </Right>
            </Header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(Header3);