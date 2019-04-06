import React, { Component } from 'react'
import { WebView, StatusBar } from 'react-native'
import {
    Container
} from 'native-base'
import Header2 from '../../components/Header2';

class TaxPayment extends Component {

    renderWebView = () => {
        return (
            <WebView
                source={{uri: 'http://gramchaitanya.co.in/SelectGP.aspx?ReturnUrl=%2f'}}
            />
        )
    }

    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='टॅक्स पेमेंट' navigationProps={this.props.navigation} />
                {
                    this.renderWebView()
                }
            </Container>
        )
    }
}
export default TaxPayment