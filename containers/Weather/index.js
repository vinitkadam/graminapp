import React, { Component } from 'react'
import { StatusBar, FlatList, Text, Linking, Image, Dimensions } from 'react-native'
import {
    Container,
    Content,
    ListItem,
    View,
    Spinner,
    Button, Right, Icon, Left
} from 'native-base'
import { connect } from 'react-redux'
import { getWeatherList } from './actions'
import Header3 from '../../components/Header3';
import { colors } from '../../colors'
import WeatherItem from './Components/WeatherItem';


class Weather extends Component {
    componentDidMount() {
        this.props.getWeatherList()
    }

    renderList = (theme, city) => {
        if (this.props.loading) {
            return (
                <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner color={theme.themeColor} />
                </Container>
            )
        } else if (this.props.error) {
            return (
                <Text>error</Text>
            )
        } else {
            return (
                <FlatList
                    data={this.props.weather_list.list}
                    keyExtractor={(item, index) => (item.dt)}
                    renderItem={({ item }) => (
                        <WeatherItem item={item} location={this.props.weather_list.city} />
                    )}
                />
            )
        }
    }

    render() {
        let theme = colors[this.props.theme]
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header3 title='हवामान' navigationProps={this.props.navigation} />
                <Content>
                    {
                        this.renderList(theme)
                    }
                </Content>
            </Container>
        )
    }
}

const styles = {
    title: {
        paddingVertical: 10,
        fontSize: 16
    },
    imgStyle: {
        height: 200,
        width: '100%',
    },
    card: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 0,
        borderRadius: 4,
        borderColor: '#ccc',
        flexWrap: 'nowrap',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 16,
        padding: 20
    },
}

const mapStateToProps = state => {
    return {
        theme: state.theme.theme,
        loading: state.weather.loading,
        weather_list: state.weather.weather_list.data,
        error: state.weather.error,
    }
}

export default connect(mapStateToProps, { getWeatherList })(Weather)