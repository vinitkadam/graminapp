import React, { Component } from 'react'
import { StatusBar, FlatList, Text, Linking } from 'react-native'
import {
    Container,
    Content,
    ListItem,
    View,
    Spinner,
    Button
} from 'native-base'
import { connect } from 'react-redux'
import { getPaymentList } from './actions'
import Header2 from '../../components/Header2';


class EPayment extends Component {
    componentDidMount() {
        this.props.getPaymentList()
    }
    
    renderList = () => {
        if(this.props.loading){
            return (
                <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner color='blue' />
                </Container>
            )
        }else if(this.props.error){
            return (
                <Text>error</Text>
            )
        } else {
            return (
                <FlatList
                    data={this.props.epayment_list}
                    renderItem={({ item }) => (
                        
                        <ListItem>
                            <Button transparent style={{ width: '100%'}} onPress={() => { Linking.openURL(item.payment_url)}}>
                                <Text>{`${item.title}`}</Text>
                            </Button>
                        </ListItem>
                    )}
                />
            )
        }
    }

    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Header2 title='E-Payment' navigationProps={this.props.navigation} />
                <Content>
                    {
                        this.renderList()
                    }
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.epayment.loading,
        epayment_list: state.epayment.epayment_list.data,
        error: state.epayment.error,
    }
}

export default connect(mapStateToProps, { getPaymentList })(EPayment)