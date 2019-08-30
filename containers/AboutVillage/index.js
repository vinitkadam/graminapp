import React, { Component } from 'react'
import { StatusBar, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import {
    Container,
    Content,
    Tabs,
    Tab,
    View,
    Spinner,
    Button,
    Card,
} from 'native-base'
import { connect } from 'react-redux'
import ViewMoreText from 'react-native-view-more-text';
import Header2 from '../../components/Header2'
import { colors } from '../../colors'
import { getAboutVillageNotifications } from './actions'
import HTML from 'react-native-htmlview';

const dummydata = [{ "id": "1", "title": "सडवली ग्रामोन्नती सेवा मंडळ, मुंबई  1", "img_name": "http://sadavli.pixelmotive.in/uploads/5652.jpg", "description": "<p>संपादक उद्योग किएलोग मानव बाजार जैसी वर्णन क्षमता हुएआदि बातसमय चुनने दुनिया करेसाथ सभीकुछ एछित उदेशीत प्रदान पुर्णता दिये लेकिन प्राण सेऔर नयेलिए मेंभटृ प्रेरना अधिकार प्रेरना आंतरजाल रखति बनाति दौरान कुशलता अनुकूल सुविधा जैसी प्रेरना मर्यादित लेकिन ७०है अत्यंत दोषसके समस्याए उनको समजते माध्यम तरहथा। वातावरण करके ध्येय रखति औषधिक तरहथा। अमितकुमार उदेशीत सोफ़्टवेर भाति पहेला एसेएवं आवश्यकत स्वतंत्रता नवंबर करके बदले बढाता परिवहन ज्यादा कार्यसिधान्तो अपने ब्रौशर स्वतंत्रता आंतरकार्यक्षमता खरिदे ज्यादा पुर्णता विकेन्द्रित मुख्य अतित 1<br></p>" }, { "id": "2", "title": "संपादक उद्योग", "img_name": "http://sadavli.pixelmotive.in/uploads/3477.jpg", "description": "<p><b>संपादक उद्योग किएलोग मानव बाजार जैसी वर्णन क्षमता हुएआदि बातसमय चुनने दुनिया करेसाथ सभीकुछ एछित उदेशीत प्रदान पुर्णता दिये लेकिन प्राण सेऔर नयेलिए मेंभटृ प्रेरना अधिकार प्रेरना आंतरजाल रखति बनाति</b></p><p><b>दौरान कुशलता अनुकूल सुविधा जैसी प्रेरना मर्यादित लेकिन ७०है अत्यंत दोषसके समस्याए उनको समजते माध्यम तरहथा। वातावरण करके ध्येय रखति औषधिक तरहथा। अमितकुमार उदेशीत सोफ़्टवेर भाति पहेला एसेएवं आवश्यकत स्वतंत्रता नवंबर करके बदले बढाता परिवहन ज्यादा कार्यसिधान्तो अपने ब्रौशर स्वतंत्रता आंतरकार्यक्षमता खरिदे ज्यादा पुर्णता विकेन्द्रित मुख्य अतित 1</b></p>" }]
const win = Dimensions.get('window')
class AboutVillage extends Component {
    componentDidMount() {
        this.props.getAboutVillageNotifications()
    }
    renderList = (theme) => {
        if (this.props.loading) {
            return (
                <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner color='blue' />
                </Container>
            )
        }
        else if (this.props.error) {
            return (
                <Text>error</Text>
            )
        }
        else {
            return (
                <FlatList
                    style={{ minHeight: win.width - 100 }}
                    data={this.props.about_village_notifications}
                    keyExtractor={(item, index) => (item.id)}
                    renderItem={({ item }) => (
                        <Card style={{ marginTop: 15, marginLeft: 15, marginRight: 15, elevation: 7, padding: 20, marginBottom: 15 }}>
                            <Text style={[styles.title, { color: theme.themeColor }]}>
                                {item.title}
                            </Text>
                            <Image source={{ uri: item.img_name }} style={styles.imgStyle} loadingIndicatorSource={require('../../assets/icon.png')} />
                            {/* <ViewMoreText
                                    numberOfLines={3}
                                    renderViewMore={this.renderViewMore}
                                    renderViewLess={this.renderViewLess}
                                    textStyle={{textAlign: 'justify'}}
                                > */}
                            <HTML
                                value={item.description}
                                stylesheet={htmlstyles}
                            // imagesMaxWidth={Dimensions.get('window').width} style={{ paddingVertical: 20 }} 

                            />
                            {/* </ViewMoreText> */}
                        </Card>
                    )}
                />
            )
        }
    }



    render() {
        let theme = colors[this.props.theme]
        let win = Dimensions.get('window')
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='गावा विषयी' navigationProps={this.props.navigation} />
                <Tabs tabBarUnderlineStyle={{ backgroundColor: theme.themeColor }} style={{ backgroundColor: theme.themeColor }} locked={false} >
                    <Tab heading="सूचना" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: theme.l2 }} activeTextStyle={{ color: theme.d2 }} activeTabStyle={{ backgroundColor: 'white' }}>
                        {this.renderList(theme)}
                    </Tab>
                    <Tab heading="ग्रामपंचायत" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: theme.l2 }} activeTextStyle={{ color: theme.d2 }} activeTabStyle={{ backgroundColor: 'white' }}>
                        <View style={{ height: 500, backgroundColor: 'white', alignItems: 'center' }}>
                            <Image source={require('../../assets/no_data_found.png')} style={{ width: win.width, height: win.width }} />
                            <Text>No data found</Text>
                            <Button style={{ backgroundColor: theme.themeColor, paddingHorizontal: 20, alignSelf: 'center', marginTop: 30, borderRadius: 8, shadowOffset: { width: 0, height: 0 } }}>
                                <Text style={{ color: 'white' }}>REFRESH NOW</Text>
                            </Button>
                        </View>
                    </Tab>
                </Tabs>
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

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        loading: state.about_village.loading,
        about_village_notifications: state.about_village.about_village_notifications.data,
        error: state.about_village.error,
    };
};

export default connect(mapStateToProps, { getAboutVillageNotifications })(AboutVillage);