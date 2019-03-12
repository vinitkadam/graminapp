import React, { Component } from 'react'
import { Text, FlatList, StatusBar } from 'react-native'
import {
    Container,
    Content,

} from 'native-base'

import GPEmployeeHeader from './GPEmployeeHeader'
import GPEmployeeMemberItem from './components/GPEmployeeMemberItem'
import Header2 from '../../components/Header2';

const dummydata = [
    {
        id: 1,
        name: 'name1',
        post: 'post1',
        startDate: '2014-03-14',
        endDate: '2018-03-14',
        contactNumber: '9897123456',
        imageSource: 'http://sadavli.pixelmotive.in/uploads/3574.jpg'
    },
    {
        id: 2,
        name: 'name2',
        post: 'post2',
        startDate: '2014-03-14',
        endDate: '2018-03-14',
        contactNumber: '9997123456',
        imageSource: 'http://sadavli.pixelmotive.in/uploads/3574.jpg'
    }
]

class GPEmployee extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <Header2 title='Gram Panchayat Employees' navigationProps={this.props.navigation} />
                <Content>
                    <FlatList
                        data = {dummydata}
                        keyExtractor={(item, index) => {item.id;} }
                        renderItem={({item}) => (<GPEmployeeMemberItem item={item} />) }
                    />
                </Content>
            </Container>
        )
    }
}

export default GPEmployee