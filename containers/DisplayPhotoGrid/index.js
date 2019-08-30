import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Image,
    FlatList
} from "react-native";
import { 
    Container,
    Spinner
} from "native-base";
import Service from '../../utils/NetworkUtils';
import Constants from '../../utils/Constants';

import { StackActions } from 'react-navigation';
import Header2 from "../../components/Header2";

const win = Dimensions.get('window')

class DisplayGalleryPhotos extends Component {
    state = {
        images: [],
        loading: true
    }

    componentWillMount() {
        Service.get(Constants.DEV_SERVER + Constants.PHOTO_GALLERY_DETAILS + this.props.navigation.getParam('id'), {})
        .then((response) => {
            if(response && response.status.toString() === '200') {
                console.log(response)
                responsedatalist = response.data.data[0].media_img
                const imagelinks = responsedatalist.map((item) => {
                    return(
                        {
                            source: { uri: item.file_name },
                        }
                    )
                })
                console.log(imagelinks)
                this.setState({ images: imagelinks, loading: false })
            } else {
                this.setState(
                        { images: [], loading: false}
                    )
            }
        })
        .catch((error) => {
            console.log(error)
            this.setState({ images: [], loading: false })
        })
    }

    renderPhotoGrid(title) {
        if(this.state.loading) {
            return (
                <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title={title} navigationProps={this.props.navigation} />
                    <Spinner  style={{ alignSelf: 'center' }} />
                </Container>
            )
        }
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <Header2 title={title} navigationProps={this.props.navigation} />
                <FlatList
                    style={{ paddingLeft: 5, paddingTop: 5 }}
                    data={this.state.images}
                    numColumns={2}
                    keyExtractor={(item, index) => {
                        return(index)
                    }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.dispatch(
                                    StackActions.push({
                                        routeName: 'displayImage',
                                        params: {
                                            images: this.state.images,
                                            selectedImage: index
                                        }
                                    })
                                );
                            }}
                        >
                            <Image 
                                source={item.source}
                                style={styles.imageStyle}
                            />
                        </TouchableOpacity>
                    )}
                />
            </Container>
        )
    }

    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title', 'फोटो गॅलरी');
        return (
            this.renderPhotoGrid(title)
        );
    }
}

const styles = {
    imageStyle: {
        width: (win.width - 15) / 2,
        height: (win.width - 15) / 2,
        marginRight: 5,
        marginBottom: 5,
    }
}
export default DisplayGalleryPhotos;