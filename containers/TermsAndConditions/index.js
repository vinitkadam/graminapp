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
import Header2 from "../../components/Header2";

class TermsAndConditions extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <Header2 title='Terms and Conditions' navigationProps={this.props.navigation} />
                <Text>TermsAndConditions</Text>
            </Container>
        );
    }
}
export default TermsAndConditions;