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
import Ionicons from '@expo/vector-icons/Ionicons'

class WeatherItem extends Component {

    getIconName = (weatherCondition) => {
        if(weatherCondition === 'Clouds') {
            return('ios-cloudy')
        } else if(weatherCondition === 'Rain') {
            return('ios-rainy')
        } else if(weatherCondition === 'Clear') {
            return('ios-sunny')
        }
        return ('ios-cloudy')
    } 

    getIconColor = (weatherCondition) => {
        if(weatherCondition === 'Clouds') {
            return('#32cdfc')
        } else if(weatherCondition === 'Rain') {
            return('#32cdfc')
        } else if(weatherCondition === 'Clear') {
            return('#fcdc3a')
        }
        return ('#32cdfc')
    } 
    render() {
        let theme = colors[this.props.theme]  
        return (
            <View style={{ marginTop: 10, marginHorizontal: 10 }}>
            <Card style={{ padding: 10 }}>
                <Grid>
                    <Row>
                        <Col size={4}>
                            <Grid>
                                <Row>
                                    <Text style={{ color: theme.themeColor, fontSize: 18 }}>{'स्थानिक हवामान - ' + this.props.location.name}</Text>
                                </Row>
                                <Row>
                                    <Text style={{ color: '#1c1c1c', fontSize: 14 }}>date</Text>
                                </Row>
                                <Row>
                                    <Text style={{ color: '#1c1c1c', fontSize: 30 }}>{this.props.item.main.temp + ' °C'}</Text>
                                </Row>
                                <Row>
                                    <Text style={{ color: '#1c1c1c', fontSize: 18 }}>{'आद्रता: ' + this.props.item.main.humidity + ' %'}</Text>
                                </Row>
                                <Row>
                                    <Text style={{ color: '#1c1c1c', fontSize: 18 }}>{this.props.item.weather[0].description}</Text>
                                </Row>
                            </Grid>
                        </Col>
                        <Col size={2} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name={this.getIconName(this.props.item.weather[0].main)} size={70} color={this.getIconColor(this.props.item.weather[0].main)} />
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

export default connect(mapStateToProps)(WeatherItem);