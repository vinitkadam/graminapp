import React, { Component } from 'react'
import { WebView, StatusBar, FlatList, Image, View, Text, Dimensions, ImageBackground } from 'react-native'
import {
    Container, Card
} from 'native-base'
import { connect } from 'react-redux'
import { getPhotoGalleryList } from './actions'
import Header2 from '../../components/Header2';

class PhotoGallery extends Component {
    
    componentDidMount() {
        this.props.getPhotoGalleryList()
    }

    renderImages = () => {
        return(
            <FlatList
                style={{ paddingBottom: 20 }}
                data={this.props.photo_gallery_list}
                keyExtractor={(item, index) => (item.id) }
                renderItem={({ item }) => (
                    <ImageBackground style={[styles.card,styles.imgStyle ]} source={{ uri: item.file_name }}>
                        <Text style={[styles.title]}>
                            {item.title}
                        </Text>
                    </ImageBackground>
                )}
            />
        )
    }
    render() {
        console.log('photoGallleryList:', this.props.photo_gallery_list)
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='फोटो गॅलरी' navigationProps={this.props.navigation} />
                {
                    this.renderImages()
                }
            </Container>
        )
    }
}

const win = Dimensions.get('window')

const styles={
    title: { 
        paddingVertical: 10,
        fontSize: 16,
        width: '100%',
        color: 'white',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.68)',
    },
    imgStyle: {
        height: 200,
        width: win.width - 20,
    },
    card: {
        justifyContent: 'flex-end',
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
        elevation: 6,
    },
}

const mapStateToProps = state => {
    return {
        photo_gallery_list: state.photo_gallery.photo_gallery_list
    }
}

export default connect(mapStateToProps, { getPhotoGalleryList })(PhotoGallery)