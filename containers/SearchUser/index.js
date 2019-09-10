import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    Linking
} from "react-native";
import {
    Container,
    Content,
    Input,
    ListItem,
    Item,
    Card,
    Spinner,
    Col,
    Row,
    Left,
    Body,
    Button,
    Icon
} from "native-base";
import { getSearchUsersList } from './actions'
import { connect } from 'react-redux';
import Service from '../../utils/NetworkUtils'
import Constants from '../../utils/Constants';

import _ from 'lodash'
import { FlatList } from "react-native-gesture-handler";
import Header2 from "../../components/Header2";

import Entypo from '@expo/vector-icons/Entypo'

const win = Dimensions.get('window');
class SearchUser extends Component {

    state = {
        loading: null,
        search_users_list: [],
        error: false,
    }

    getUsers = _.debounce((text) => {
        Service.get(Constants.DEV_SERVER + Constants.SEARCH_USER + '?q=' + text, {})
            .then((response) => {
                if (response && response.status.toString() === '200') {
                    console.log(response.data.data)
                    this.setState({ loading: false, search_users_list: response.data.data, error: false });
                } else {
                    this.setState({ loading: false, search_users_list: [], error: false })
                }
            })
            .catch((error) => {
                // console.log(error)
                this.setState({ loading: false, search_users_list: [], error: true })
            })
    }, 300)

    renderUsersList() {
        if (this.state.loading === null) {
            return
        }
        else if (this.state.loading) {
            return (
                <Spinner style={{ alignSelf: 'center' }} />
            )
        }
        else if (this.state.search_users_list.length == 0) {
            return (
                <Text>
                    No Users Found
                </Text>
            )
        } else {
            return (
                <FlatList
                    data={this.state.search_users_list}
                    renderItem={({ item }) => {
                        return (
                            <Card style={{ margin: 10, elevation: 10, padding: 10, paddingBottom: 20, marginLeft: 10, marginRight: 10, marginBottom: 15 }}>
                                <Row>
                                    <Col style={{ alignItems: 'center', justifyContent: 'center', width: win.width / 3 }}>
                                        <Image
                                            source={{ uri: item.img_url }}
                                            style={{ alignSelf: 'center', height: win.width / 3 - 20, width: win.width / 3 - 20, borderRadius: 30 }}
                                        />
                                    </Col>
                                    <Col>
                                        <ListItem icon>
                                            <Left><Icon style={{ fontSize: 17 }} name="ios-person" /></Left>
                                            <Body><Text>{item.name}</Text></Body>
                                        </ListItem>
                                        <ListItem icon onPress={() => { Linking.openURL(`tel:${item.contact}`); }} >
                                            <Left><Icon style={{ fontSize: 17 }} name="md-call" /></Left>
                                            <Body><Text>{item.contact}</Text></Body>
                                        </ListItem>
                                        <ListItem icon onPress={() => { Linking.openURL(`mailto:${item.email_id}`); }} >
                                            <Left><Entypo style={{ fontWeight: 'bold', fontSize: 17 }} name="email" /></Left>
                                            <Body><Text>{item.email_id}</Text></Body>
                                        </ListItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}><Icon style={{ fontSize: 18 }} active name="ios-pin" /></Col>
                                    <Col style={{ paddingVertical: 10 }}><Text>{item.address}</Text></Col>
                                </Row>
                            </Card>
                        )
                    }}
                />
            )
        }
    }


    render() {
        console.log(this.props.search_users_list)
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='सभासद शोधा' navigationProps={this.props.navigation} />
                <Item style={{ backgroundColor: '#ededed', borderRadius: 30, margin: 10, borderBottomWidth: 0, paddingHorizontal: 15 }} last>
                    <Input
                        autoFocus
                        onChangeText={(text) => {
                            this.getUsers(text)
                        }}
                    />
                </Item>
                <Content>
                    {this.renderUsersList()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        loading: state.search_users.loading,
        search_users_list: state.search_users.search_users_list,
        error: state.search_users.error,
    };
};

export default connect(mapStateToProps, { getSearchUsersList })(SearchUser);