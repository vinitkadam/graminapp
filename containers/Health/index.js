import React, { Component } from 'react'
import { StatusBar, Text, StyleSheet } from 'react-native'
import {
    Container,
    Content,
    Tabs,
    Tab,
    View
} from 'native-base'
import { connect } from 'react-redux'
import Header3 from '../../components/Header3'
import { colors } from '../../colors'

class Health extends Component {
    render() {
        let theme = colors[this.props.theme]
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header3 title='Health' navigationProps={this.props.navigation} />
                <Tabs tabBarUnderlineStyle={{ backgroundColor: theme.themeColor }} style={{ backgroundColor: theme.themeColor }} locked={false} >
                    <Tab heading="Notice" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: theme.l2 }} activeTextStyle={{ color: theme.d2 }} activeTabStyle={{ backgroundColor: 'white' }}>
                        <View style={{ height: 500 }}>
                            <Content>
                                <Text>No data found</Text>
                            </Content>
                        </View>
                    </Tab>
                    <Tab heading="Institution" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: theme.l2 }} activeTextStyle={{ color: theme.d2 }} activeTabStyle={{ backgroundColor: 'white' }}>
                        <View style={{ height: 500 }}>
                            <Content>
                                <Text>Health Details</Text>
                            </Content>
                        </View>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(Health);