import React, { Component } from 'react'
import { StatusBar, Text, FlatList } from 'react-native'
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

const dummydata = [
    {
        id: 1,
        name: 'name1',
        date: '2018-03-14',
        imageSource: 'http://sadavli.pixelmotive.in/uploads/3574.jpg'
    },
    {
        id: 2,
        name: 'name2',
        date: '2018-03-14',
        imageSource: 'http://sadavli.pixelmotive.in/uploads/3574.jpg'
    }
]

class AboutVillage extends Component {
    render() {
        let theme = colors[this.props.theme]
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header3 title='Health' navigationProps={this.props.navigation} />
                <Content>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: theme.themeColor}} style={{ backgroundColor: theme.themeColor}} locked={false} > 
                    <Tab heading="Notice" tabStyle={{backgroundColor: 'white'}} textStyle={{color: theme.l2}} activeTextStyle={{color: theme.d2}} activeTabStyle={{backgroundColor: 'white'}}>
                        <View style={{ height: 500 }}>
                            <Content>
                                <Text>No data found</Text>
                            </Content>
                        </View>
                    </Tab>
                    <Tab heading="Institution" tabStyle={{backgroundColor: 'white'}} textStyle={{color: theme.l2}} activeTextStyle={{color: theme.d2}} activeTabStyle={{backgroundColor: 'white'}}>
                        <View style={{ height: 500 }}>
                            <Content>
                                <FlatList 
                                    data={dummydata}
                                    renderItem={({ item }) => {
                                        <
                                    }}
                                />
                            </Content>
                        </View>
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

export default connect(mapStateToProps)(AboutVillage);