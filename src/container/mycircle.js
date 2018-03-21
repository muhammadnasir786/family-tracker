import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage, ActivityIndicator } from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import { connect } from "react-redux";
import FTAction from "../store/actions/FTAction";
import * as firebase from 'firebase';
let uid;

AsyncStorage.getItem('uid').then((value) => {
    uid = (value)
});
let list;
class MyCircle extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            latitude: '',
            longitude: '',
        }
  

    }
    componentWillReceiveProps(nextProps) {
        // nextProps
    }
    componentWillMount() {
        this.props.getUsers();
        navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    getLoc: true
                }, () => {
                    this.props.updateLocation({
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    })
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 },
        );

    }
    render() {


        return (

            <Container>
                <Content>
                    <Card>
                        {/* <Text>DEmo</Text> */}
                        {

                            (uid) ? (
                                this.props.user[uid] !== undefined ?
                                    this.props.user[uid].circle !== undefined ?
                                        list = Object.keys(this.props.user[uid].circle).map((circleKey) => {
                                            let oneCircle = this.props.user[uid].circle[circleKey];
                                            // alert(JSON.stringify(oneCircle))
                                            
                                            // console.log(oneCircle,'asdddasdddasdddasdddasdddasdddasdddasdddasdddasdddasdddasdddasddd')
                                            return (
                                                <CardItem>
                                                    <Icon active name="logo-googleplus" />
                                                    <Text>{oneCircle.circleName}</Text>
                                                    <Right>
                                                        <Icon onPress={() => {
                                                            this.props.navigation.navigate('One', { circleKey: circleKey })
                                                        }} name="arrow-forward" />
                                                    </Right>
                                                </CardItem>

                                            );

                                        })
                                        : null

                                    : <ActivityIndicator size="large" color="#0000ff" />
                            ) : (
                                   null
                                )



                        }


                    </Card>
                </Content>
            </Container>
        );
    }
}

// export default MyCircle;
let mapStateToProps = (state) => {
    return {
        user: state.FTReducer.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => { dispatch(FTAction.getUsers()) },
        updateLocation: (data) => { dispatch(FTAction.updateLocation(data)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyCircle)
