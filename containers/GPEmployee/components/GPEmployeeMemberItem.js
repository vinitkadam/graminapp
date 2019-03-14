import React, { Component } from 'react'
import { Text, Image, Linking } from 'react-native'
import {
    Card,
    Grid,
    Row,
    Col,
    View,
    Button
} from 'native-base'
import { connect } from 'react-redux'
import FeatherIcon from '@expo/vector-icons/Feather'
import { colors } from '../../../colors'

class SamitiMemberItem extends Component {
    render() {
        let theme = colors[this.props.theme]  
        return (
            <View style={{ marginTop: 10, marginHorizontal: 10 }}>
            <Card style={{ padding: 10 }}>
                <Grid>
                    <Row>
                        <Col size={3}>
                            <Grid>
                                <Row>
                                    <Text style={{ color: '#676767', fontSize: 18 }}>{this.props.item.name}</Text>
                                </Row>
                                <Row>
                                    <Text style={{ color: '#1c1c1c', fontSize: 14 }}>{this.props.item.post}</Text>
                                </Row>
                                <Row>
                                    <Text style={{ color: '#1c1c1c', fontSize: 14 }}>{this.props.item.startDate + ' to ' + this.props.item.endDate}</Text>
                                </Row>
                                <Row>
                                    <Button transparent onPress={() => { Linking.openURL('tel: '+this.props.item.contactNumber) }}>
                                        <View>
                                        <Row>
                                            <FeatherIcon name='phone-call' style={{ color: theme.themeColor, fontSize: 16, alignSelf: 'center'}}/>
                                            <Text style={{ color: theme.themeColor, fontSize: 16, paddingLeft: 5 }}>{this.props.item.contactNumber}</Text>
                                        </Row>
                                        </View>
                                    </Button>
                                </Row>
                            </Grid>
                        </Col>
                        <Col size={1}>
                            <Image 
                                source={{ uri: this.props.item.imageSource }}
                                style={{ width: 80, height: 80 }}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Card>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(SamitiMemberItem);