import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container, Content, Input, Button, Text, View } from 'native-base'
import Header2 from '../../components/Header2'
import { connect } from 'react-redux';
import { colors }  from '../../colors'

class RationCard extends Component {
    render() {
        let theme = colors[this.props.theme]  
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='Ration Card' navigationProps={this.props.navigation}/>
                <Content>
                    <View style={{ paddingHorizontal: 15, marginBottom: 15 }}>
                        <Input active
                        style={{ padding: 5, marginVertical: 5, borderBottomColor: '#cccccc', borderBottomWidth: 1 }}
                            placeholder='Ration Card Number'
                        />
                    </View>
                    <Button rounded style={{ alignSelf: 'center', paddingHorizontal: 20, backgroundColor: theme.themeColor}}>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(RationCard)