import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import FTAction from '../store/actions/FTAction';
class Setting extends Component {
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
}
let mapStateToProps = (state) => {
  return {

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { dispatch({ type: 'LOGOUT' }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Setting)