import React, { Component } from 'react';
import { TouchableOpacity } from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import { connect } from "react-redux";
import FTAction from "../store/actions/FTAction";
import * as firebase from 'firebase';
class MyCircle extends Component {

    

    componentWillMount(){
        this.props.getUsers();
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>Familty</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

// export default MyCircle;
let mapStateToProps = (state) => {
    return {
        // user : state.FTReducer.users[firebase.auth().currentUser.uid]
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        getUsers : ()=>{ dispatch(FTAction.getUsers())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyCircle)
