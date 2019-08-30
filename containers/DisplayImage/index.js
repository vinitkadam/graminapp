import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    Dimensions
} from "react-native";
import { 
    Container,
    Content
} from "native-base";
import Gallery from 'react-native-image-gallery'



class DisplayImage extends Component {

    renderGallery(images, selectedImage) {
        return(
            <Gallery
                initialPage={selectedImage}
                style={{ flex: 1, backgroundColor: 'black' }}
                images={images}
            />
        )
    }

    render() {
        const images = this.props.navigation.getParam('images')
        const selectedImage = this.props.navigation.getParam('selectedImage')

        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                {this.renderGallery(images, selectedImage)}
            </Container>
        );
    }
}
export default DisplayImage;