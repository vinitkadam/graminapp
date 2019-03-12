import React, { Component } from 'react'
import { WebView, StatusBar } from 'react-native'
import {
    Container
} from 'native-base'
import Header2 from '../../components/Header2';

class TaxPayment extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='Tax Payment' navigationProps={this.props.navigation} />
                <WebView
                    source={{uri: 'http://gramchaitanya.co.in/SelectGP.aspx?ReturnUrl=%2f'}}
                />
            </Container>
        )
    }
}
export default TaxPayment