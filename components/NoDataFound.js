import React, { Component } from 'react-native'
import { Image } from 'react-native'
import { Text, Button, View } from 'native-base'

export default class NoDataFound extends Component {
    render() {
        return (
            <View style={{ height: 500, backgroundColor: 'white', alignItems: 'center' }}>
                <Image source={require('../assets/no_data_found.png')} style={{ width: '100%' }}/>
                <Text>No data found</Text>
                <Button style={{ backgroundColor: this.props.theme, paddingHorizontal: 20, alignSelf: 'center', marginTop: 30, borderRadius: 8, shadowOffset: { width: 0, height: 0} }}>
                    <Text style={{ color: 'white' }}>REFRESH NOW</Text>
                </Button>
            </View>
        )
    }
}
