import React, { Component } from 'react'
import { StatusBar, Text, FlatList } from 'react-native'
import {
    Container,
    Content,
    Tabs,
    Tab,
    View,
    Spinner,
    CardItem, Left, Right, Button, Icon, Body, Card, Image
} from 'native-base'
import { connect } from 'react-redux'
import Header2 from '../../components/Header2'
import { colors } from '../../colors'
import GPListItem from './components/GPListItem';
import { getAboutVillageNotifications } from './actions'

const dummydata = [{"id":"1","title":"सडवली ग्रामोन्नती सेवा मंडळ, मुंबई  1","img_name":"http://sadavli.pixelmotive.in/uploads/5652.jpg","description":"<p>संपादक उद्योग किएलोग मानव बाजार जैसी वर्णन क्षमता हुएआदि बातसमय चुनने दुनिया करेसाथ सभीकुछ एछित उदेशीत प्रदान पुर्णता दिये लेकिन प्राण सेऔर नयेलिए मेंभटृ प्रेरना अधिकार प्रेरना आंतरजाल रखति बनाति दौरान कुशलता अनुकूल सुविधा जैसी प्रेरना मर्यादित लेकिन ७०है अत्यंत दोषसके समस्याए उनको समजते माध्यम तरहथा। वातावरण करके ध्येय रखति औषधिक तरहथा। अमितकुमार उदेशीत सोफ़्टवेर भाति पहेला एसेएवं आवश्यकत स्वतंत्रता नवंबर करके बदले बढाता परिवहन ज्यादा कार्यसिधान्तो अपने ब्रौशर स्वतंत्रता आंतरकार्यक्षमता खरिदे ज्यादा पुर्णता विकेन्द्रित मुख्य अतित 1<br></p>"},{"id":"2","title":"संपादक उद्योग","img_name":"http://sadavli.pixelmotive.in/uploads/3477.jpg","description":"<p><b>संपादक उद्योग किएलोग मानव बाजार जैसी वर्णन क्षमता हुएआदि बातसमय चुनने दुनिया करेसाथ सभीकुछ एछित उदेशीत प्रदान पुर्णता दिये लेकिन प्राण सेऔर नयेलिए मेंभटृ प्रेरना अधिकार प्रेरना आंतरजाल रखति बनाति</b></p><p><b>दौरान कुशलता अनुकूल सुविधा जैसी प्रेरना मर्यादित लेकिन ७०है अत्यंत दोषसके समस्याए उनको समजते माध्यम तरहथा। वातावरण करके ध्येय रखति औषधिक तरहथा। अमितकुमार उदेशीत सोफ़्टवेर भाति पहेला एसेएवं आवश्यकत स्वतंत्रता नवंबर करके बदले बढाता परिवहन ज्यादा कार्यसिधान्तो अपने ब्रौशर स्वतंत्रता आंतरकार्यक्षमता खरिदे ज्यादा पुर्णता विकेन्द्रित मुख्य अतित 1</b></p>"}]

class AboutVillage extends Component {
    componentDidMount() {
        this.props.getAboutVillageNotifications()
    }
    renderList = () => {
        if(this.props.loading){
            return (
                <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner color='blue' />
                </Container>
            )
        }
        else if(this.props.error){
            return (
                <Text>error</Text>
            )
        } 
        else {
            return (
                <FlatList
                    data = {this.props.about_village_notifications}
                    keyExtractor={(item, index) => (item.id) }
                    renderItem={({item}) => (
                        <GPListItem item={item} />
                    ) }
                />
            )
        }

        // return (
        //     <FlatList
        //         data = {this.props.about_village_notifications}
        //         keyExtractor={(item, index) => (item.id) }
        //         renderItem={({item}) => (
        //             <GPListItem item={item} />
        //         ) }
        //     />
        // )
    }

    

    render() {
        let theme = colors[this.props.theme]
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='About Village' navigationProps={this.props.navigation} />
                <Tabs tabBarUnderlineStyle={{ backgroundColor: theme.themeColor}} style={{ backgroundColor: theme.themeColor}} locked={false} > 
                    <Tab heading="Notice" tabStyle={{backgroundColor: 'white'}} textStyle={{color: theme.l2}} activeTextStyle={{color: theme.d2}} activeTabStyle={{backgroundColor: 'white'}}>
                        <Content>
                            {this.renderList()}
                        </Content>

                    </Tab>
                    <Tab heading="Institution" tabStyle={{backgroundColor: 'white'}} textStyle={{color: theme.l2}} activeTextStyle={{color: theme.d2}} activeTabStyle={{backgroundColor: 'white'}}>
                        <View style={{ height: 500, backgroundColor: 'white' }}>
                            <Content>
                                <Text>No data found</Text>
                            </Content>
                        </View>                        
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        loading: state.about_village.loading,
        about_village_notifications: state.about_village.about_village_notifications,
        error: state.about_village.error,
    };
};

export default connect(mapStateToProps, { getAboutVillageNotifications })(AboutVillage);