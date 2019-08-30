import React, { Component } from 'react'
import { Text, StatusBar, Image, Dimensions } from 'react-native'
import {
    Container,
    Footer,
    Body,
    Content,
    FooterTab,
    View,
    List,
    ListItem,
    Icon,
    Left,
    Button,
    Right,
} from 'native-base'
import { connect } from 'react-redux'
import ThemeReducer from '../../reducers/ThemeReducer';
import { colors } from '../../colors'
import Header2 from '../../components/Header2';

class ContactUS extends Component {
    render() {
        let theme = colors[this.props.theme]
        return (
            <Container style={{ marginTop: StatusBar.currentHeight, justifyContent: 'space-between' }}>
                <Header2 title='संपर्क ' navigationProps={this.props.navigation} />
                <View>
                    <Image style={{ alignSelf: 'center', marginBottom: 30 }} source={require('../../assets/icon.png')} />
                    <List>
                        <ListItem icon noBorder>
                            <Left>
                                <Button style={{ backgroundColor: theme.themeColor }}>
                                    <Icon name="ios-call" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>9028591113</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon noBorder>
                            <Left>
                                <Button style={{ backgroundColor: theme.themeColor }}>
                                    <Icon name="ios-mail" />
                                </Button>
                            </Left>
                            <Body>
                                <Text></Text>
                            </Body>
                        </ListItem>
                    </List>
                </View>
                <Image source={require('./images/footer.png')} style={{ height: 60, width: Dimensions.get('window').width, }} />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(ContactUS);