import React, { Component } from 'react'
import { StatusBar, FlatList, Text, Linking, Image, Dimensions, StyleSheet } from 'react-native'
import {
    Container,
    Content,
    ListItem,
    View,
    Spinner,
    Button, Right, Icon, Left
} from 'native-base'
import { connect } from 'react-redux'
import HTML from 'react-native-htmlview';
import { getMandalList } from './actions'
import Header2 from '../../components/Header2';
import { colors } from '../../colors'


class Mandal extends Component {
    componentDidMount() {
        this.props.getMandalList()
    }

    renderList = (theme) => {
        if (this.props.loading) {
            return (
                <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner color='blue' />
                </Container>
            )
        } else if (this.props.error) {
            return (
                <Text>error</Text>
            )
        } else {
            return (
                <FlatList
                    data={this.props.mandal_list}
                    keyExtractor={(item, index) => (item.id)}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={[styles.title, { color: theme.themeColor }]}>
                                {item.title}
                            </Text>
                            <Image source={{ uri: item.img_name }} style={styles.imgStyle} />
                            <HTML value={item.description}
                                stylesheet={htmlstyles}

                            />
                        </View>
                    )}
                />
            )
        }
    }

    render() {
        let theme = colors[this.props.theme]
        console.log(this.props.loading)
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='मंडळ' navigationProps={this.props.navigation} />
                <Content>
                    {
                        this.renderList(theme)
                    }
                </Content>
            </Container>
        )
    }
}

const styles = {
    title: {
        paddingVertical: 10,
        fontSize: 16
    },
    imgStyle: {
        height: 200,
        width: '100%',
        resizeMode: 'contain'
    },
    card: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 0,
        borderRadius: 4,
        borderColor: '#ccc',
        flexWrap: 'nowrap',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 16,
        padding: 20
    },
}

const htmlstyles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // make links coloured pink
    },
    p: {
        lineHeight: 20,
    }
});

const mapStateToProps = state => {
    return {
        theme: state.theme.theme,
        loading: state.mandal.loading,
        mandal_list: state.mandal.mandal_list.data,
        error: state.mandal.error,
    }
}

export default connect(mapStateToProps, { getMandalList })(Mandal)