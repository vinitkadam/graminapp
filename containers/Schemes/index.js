import React, { Component } from 'react'
import { StatusBar, Text, WebView } from 'react-native'
import {
    Container,
    Content,
    Tabs,
    Tab
} from 'native-base'
import { connect } from 'react-redux'
import Header3 from '../../components/Header3'
import { colors } from '../../colors'

class Schemes extends Component {
    render() {
        let theme = colors[this.props.theme]
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header3 title='Goverment Schemes' navigationProps={this.props.navigation} />
                <Tabs tabBarUnderlineStyle={{ backgroundColor: theme.themeColor}} style={{ backgroundColor: theme.themeColor}} locked={false} > 
                    <Tab heading="Yojna" tabStyle={{backgroundColor: 'white'}} textStyle={{color: theme.themeColor}} activeTextStyle={{color: theme.themeColor }} activeTabStyle={{backgroundColor: 'white'}}>
                        <Container>
                            <Content>
                                <Text>No data found</Text>
                            </Content>
                        </Container>
                    </Tab>
                    <Tab heading="Maha Yojna" tabStyle={{backgroundColor: 'white'}} textStyle={{color: theme.themeColor}} activeTextStyle={{color: theme.themeColor}} activeTabStyle={{backgroundColor: 'white'}}>
                            <WebView
                                source={{uri: 'https://mahaschemes.maharashtra.gov.in/'}}
                            />
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

export default connect(mapStateToProps)(Schemes);