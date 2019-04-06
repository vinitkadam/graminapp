import React, { Component } from 'react'
import { StatusBar, WebView } from 'react-native'
import {
    Container
} from 'native-base'
import Header2 from '../../components/Header2';

class Videos extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='विडिओ' navigationProps={this.props.navigation} />
                <WebView
                    source={{uri: 'https://www.youtube.com/'}}
                />
            </Container>
        )
    }
}
export default Videos