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

class AboutApp extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <Header2 title='अँप माहिती' navigationProps={this.props.navigation} />
                <Text>अँप माहिती </Text>
            </Container>
        );
    }
}
export default AboutApp;