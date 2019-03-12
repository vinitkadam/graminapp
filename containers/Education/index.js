import React, { Component } from 'react'
import { StatusBar, Text } from 'react-native'
import {
    Container,
    Content,
    Tabs,
    Tab
} from 'native-base'
import { connect } from 'react-redux'
import Header3 from '../../components/Header3'
import { colors } from '../../colors'

class Education extends Component {
    render() {
        let theme = colors[this.props.theme]
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header3 title='Education' navigationProps={this.props.navigation} />
                <Content>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: theme.themeColor}} style={{ backgroundColor: theme.themeColor}} locked={false} > 
                    <Tab heading="Notice" tabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: theme.d2}} activeTabStyle={{backgroundColor: 'white'}}>
                        <Content>
                            <Text>No data found</Text>
                        </Content>
                    </Tab>
                    <Tab heading="Institution" tabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: theme.d2}} activeTabStyle={{backgroundColor: 'white'}}>
                        <Content>
                        <Text>Education Details</Text>
                        </Content>
                    </Tab>
                </Tabs>
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

export default connect(mapStateToProps)(Education);