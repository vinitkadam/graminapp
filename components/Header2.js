import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Header, Body, Button,Icon, Title, Grid, Row } from 'native-base'
import { connect } from 'react-redux'
import { StackActions } from 'react-navigation';

import { colors } from '../colors'


class Header2 extends Component {
    render() {
        const popAction = StackActions.pop({
            n: 1,
        });
        let theme = colors[this.props.theme]  
        return(
            <Header style={{ backgroundColor: theme.themeColor, paddingLeft: 0}}>
            <Grid>
                <Row>
                    <Button style={{ paddingRight: 15 }} transparent onPress={() => { this.props.navigationProps.dispatch(popAction) }}>
                        <Icon 
                            name={Platform.OS === 'android' ? 'md-arrow-back' : 'ios-arrow-back'} 
                        />
                    </Button>
                    <Body style={{ justifyContent: "flex-start" }}>
                        <Title>{`${this.props.title}`}</Title>
                    </Body>
                </Row>
            </Grid>
            </Header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(Header2);