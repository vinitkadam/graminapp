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
                <Header2 title='नियम व अटी ' navigationProps={this.props.navigation} />
                <Text>नियम व अटी </Text>
            </Container>
        );
    }
}
export default TermsAndConditions;