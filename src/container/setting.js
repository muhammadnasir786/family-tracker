import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base';
export default class Setting extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button danger onPress={() => {
            AsyncStorage.clear();
            this.props.navigation.navigate('Auth');

          }}><Text> Logout </Text></Button>
        </Content>
      </Container>
    );
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    // alert()
    // this.props.navigation.navigate('Auth');
  };
}