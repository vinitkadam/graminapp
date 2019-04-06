import React, { Component } from 'react'
import { Text, Image, Dimensions } from 'react-native'
import { Card, View, CardItem, Button } from 'native-base'
import { connect } from 'react-redux'
import HTML from 'react-native-render-html';
import { colors } from '../../../../colors'

class MandalListItem extends Component {
    render() {
        let theme = colors[this.props.theme]
        return (
            <View style={styles.card}>
                <Text style={[styles.title, { color: theme.themeColor }]}>
                    {this.props.item.title}
                </Text>
                <Image source={{uri: this.props.item.img_name }} style={styles.imgStyle}/>
                <HTML html={this.props.item.description} imagesMaxWidth={Dimensions.get('window').width} />
            </View>
        )
    }
}

const styles={
    title: { 
        paddingVertical: 10,
        fontSize: 16 
    },
    imgStyle: {
        height: 200,
        width: '100%',
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

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(MandalListItem);
