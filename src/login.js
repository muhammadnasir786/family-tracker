import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import {

    Container, Header, Content, Card, CardItem, Text, Body,
    Item, Input, Icon, Button
} from 'native-base';
import { connect } from 'react-redux';
import AuthAction from './store/actions/authAction'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: 'nasir@gmail.com',
            password: 'nasir786'
        }
        
    }
    static navigationOptions = {
        title: 'Access Your Account',
    };
    componentWillReceiveProps = async  (nextProps)=> {
        nextProps.isLogin === true ? this.props.navigation.navigate('App') : null
        await AsyncStorage.setItem('userToken', 'abc');
    }

    render() {
        // this.props.isLogin === true ? this.props.navigation.navigate('MainApplication') : null
        return (
            <Container>
                <Content>
                    <Card>
                        {/* <CardItem header>
                            <Text>Access Your Account</Text>
                        </CardItem> */}
                        <CardItem>
                            <Body>
                                <Item>
                                    <Icon active name='home' />
                                    <Input
                                        value={this.state.email}
                                        onChangeText={(text) => { this.setState({ email: text }) }} placeholder='Icon Textbox' />
                                </Item>
                                <Item>
                                    <Icon active name='home' />
                                    <Input
                                        value={this.state.password}
                                        secureTextEntry onChangeText={(text) => { this.setState({ password: text }) }} placeholder='Icon Textbox' />
                                </Item>
                                <Button style={{ margin: 10 }} rounded block info iconRight onPress={() => {
                                    let emailPass = {
                                        email: this.state.email,
                                        password: this.state.password
                                    }
                                    this.props.login(emailPass)
                                }}>
                                    <Icon name='arrow-back' />
                                    <Text>Login</Text>
                                </Button>
                                <Button style={{ margin: 10 }} rounded block info iconRight bordered dark
                                    onPress={() => {
                                        this.props.navigation.navigate('Register');
                                    }}>
                                    <Icon name='arrow-back' />
                                    <Text>Create New Account Here </Text>
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
        isLogin: state.AuthReducer.isLogin,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => { dispatch(AuthAction.loginUser(data)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)