import React, { Component } from 'react';
import {
    Container, Header, Content, Card, CardItem, Text, Body,
    Item, Input, Icon, Button
} from 'native-base';
import { connect } from "react-redux";
import AuthAction from './store/actions/authAction'
class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: 'nasir@gmail.com',
            password: 'nasir786'
        
        }
    }
    static navigationOptions = {
        title: 'Register Here ! ',
      };
    
    render() {

        return (
            <Container>
                <Content>
                    <Card>
                        {/* <CardItem header>
                            <Text>Register Here ! </Text>
                        </CardItem> */}
                        <CardItem>
                            <Body>
                                <Item>
                                    <Icon active name='home' />
                                    <Input  
                                    value={this.state.email}
                                    onChangeText={(text)=>{ this.setState({ email : text})}}
                                    placeholder='Icon Textbox' />
                                </Item>
                                <Item>
                                    <Icon active name='home' />
                                    <Input
                                    value={this.state.password} 
                                    secureTextEntry
                                    onChangeText={(text)=>{ this.setState({ password : text})}} placeholder='Icon Textbox' />
                                </Item>
                                <Button style={{margin:10}} rounded block info iconRight  onPress={() => {
                                    let emailPass = {
                                        email: this.state.email,
                                        password: this.state.password
                                    }
                                    this.props.creataUser(emailPass)
                                }}>
                                    <Icon name='arrow-back' />
                                    <Text>Register</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        //   isLogin: state.AuthReducer.isLogin,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        // login: (data) => { dispatch(AuthAction.loginUser(data)) },
        creataUser: (data) => { dispatch(AuthAction.createUser(data)) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)