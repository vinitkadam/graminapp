import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container, Content, Input, Button, Text, View } from 'native-base'
import Header2 from '../../components/Header2'
import { connect } from 'react-redux';
import { colors }  from '../../colors'

class RationCard extends Component {
    render() {
        let theme = colors[this.props.theme]  
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='Certificates' navigationProps={this.props.navigation}/>
                <Content>
                    <Text>Certificates</Text>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(RationCard)