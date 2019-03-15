import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar
} from "react-native";
import { 
    Container,
    Content
} from "native-base";
import Header2 from '../../components/Header2'

class ImportantContactNo extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <Header2 title="Important Contact Numbers" navigationProps={this.props.navigation} />
                <Text>ImportantContactNo</Text>
            </Container>
        );
    }
}
export default ImportantContactNo;