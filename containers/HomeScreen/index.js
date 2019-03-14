import React, { Component } from 'react'
import { MenuProvider } from 'react-native-popup-menu'
import { 
    StatusBar, 
    Dimensions,     
    Text,
    Image
} from 'react-native'
import { 
    Container,  
    Icon,  
    Grid, 
    Col, 
    Row, 
    Content
} from 'native-base'
import { connect } from 'react-redux'
import { colors } from '../../colors'
import GridCard from './components/GridCard'
import Header3 from '../../components/Header3';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        drawerLabel: 'Notification',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/icons/home.png')}
                style={styles.icon}
            />
        ),
    })
    render(){
        let theme = colors[this.props.theme]
        return(
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <Header3 title='Prayojan' navigationProps={this.props.navigation} />
                <Content>
                <Grid>
                    <Row style={styles.rowStyle}>
                        <Col style={styles.colStyle}>
                            <GridCard style={styles.cardStyle} navigationProps={this.props.navigation} routeName='aboutvillage'>
                                <Image source={require('./assets/icons/house.png')}/>
                                <Text style={styles.cardText}>About Village</Text>
                                
                            </GridCard>
                        </Col>
                        <Col style={styles.colStyle}>
                            <GridCard style={styles.cardStyle} navigationProps={this.props.navigation} routeName='gpsamiti'>
                            <Image source={require('./assets/icons/people.png')} />
                                <Text style={styles.cardText}>Gram Panchayat Committee</Text>
                            </GridCard>
                        </Col>
                        <Col style={[styles.colStyle, { paddingRight: 10 } ]}>
                            <GridCard style={styles.cardStyle} navigationProps={this.props.navigation} routeName='gpemployee'>
                                <Image source={require('./assets/icons/government-buildings-2.png')} />
                                <Text style={styles.cardText}>Gram Panchayat Employees</Text>
                            </GridCard>
                        </Col>
                    </Row>

                    <Row style={styles.rowStyle}>
                        <Col style={styles.colStyle}>
                            <GridCard style={styles.cardStyle} navigationProps={this.props.navigation} routeName='rationcard'>
                                <Image source={require('./assets/icons/leaflet.png')}/>
                                <Text style={styles.cardText}>Ration Card</Text>
                            </GridCard>
                        </Col>
                        <Col style={styles.colStyle}>
                            <GridCard style={styles.cardStyle} navigationProps={this.props.navigation} routeName='certificates'>
                                <Image source={require('./assets/icons/application-form.png')} />
                                <Text style={styles.cardText}>Certificates</Text>
                            </GridCard>
                        </Col>
                        <Col style={[styles.colStyle, { paddingRight: 10 } ]}>
                            <GridCard style={styles.cardStyle} navigationProps={this.props.navigation} routeName='taxpayment'>
                                <Image source={require('./assets/icons/taxes.png')} />
                                <Text style={styles.cardText}>Tax Payment</Text>
                            </GridCard>
                        </Col>
                    </Row>

                    <Row style={[styles.rowStyle, { paddingBottom: 30 }]}>
                        <Col style={styles.colStyle}>
                            <GridCard style={styles.cardStyle} navigationProps={this.props.navigation} routeName='photogallery'>
                                <Image source={require('./assets/icons/photos.png')}/>
                                <Text style={styles.cardText}>Photo Gallery</Text>                                
                            </GridCard>
                        </Col>
                        <Col style={styles.colStyle}>
                            <GridCard style={styles.cardStyle} navigationProps={this.props.navigation} routeName='videos'>
                            <Image source={require('./assets/icons/youtube.png')} />
                                <Text style={styles.cardText}>Videos</Text>
                            </GridCard>
                        </Col>
                        <Col style={[styles.colStyle, { paddingRight: 10 } ]}>
                            <GridCard style={styles.cardStyle} navigationProps={this.props.navigation} routeName='epayment'>
                                <Image source={require('./assets/icons/credit-card.png')} />
                                <Text style={styles.cardText}>E-payment</Text>
                            </GridCard>
                        </Col>
                    </Row>
                </Grid>
                </Content>
            </Container>
        )
    }
}

const win = Dimensions.get('window')

const styles = {
    rowStyle: {
        paddingTop: 20
    },
    colStyle: {
        paddingLeft: 10,
    },
    cardStyle: {
        paddingTop: 15,
        height: (win.width / 3),
        alignItems: 'center'
    },
    cardText: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 12
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps)(HomeScreen);