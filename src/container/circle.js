import React, { Component } from 'react';
import { AsyncStorage, ActivityIndicator } from "react-native";
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { connect } from "react-redux";
import openMap, { createMapLink } from 'react-native-open-maps';
import { createOpenLink } from 'react-native-open-maps'

let uid;

AsyncStorage.getItem('uid').then((value) => {
  uid = (value)
});

class Circle extends Component {
  static navigationOptions = {
    title: 'Circle Name , Circle',
  };

  render() {
    const { params } = this.props.navigation.state;
    const circleKey = params ? params.circleKey : null;
    // alert(JSON.stringify(circleKey))

    {/* <Text>{JSON.stringify(circleKey)}</Text> */ }
    // noMember = 
    return (
      <Container>
        <Content>
          <List>
            {
              uid ?
                this.props.user[uid] !== undefined ?
                  this.props.user[uid].circle !== undefined ?
                    this.props.user[uid].circle[circleKey] !== undefined ?
                      this.props.user[uid].circle[circleKey].member !== undefined ?
                        Object.keys(this.props.user[uid].circle[circleKey].member).map((memberKey) => {
                          // alert(memberKey);
                          let oneMember = this.props.user[uid].circle[circleKey].member[memberKey];
                          return (
                            <ListItem onPress={() => {
                              openMap({
                                latitude: this.props.user[uid].location.latitude,
                                longitude: this.props.user[uid].location.longitude
                              });
                            }
                            }>
                              <Thumbnail square size={80} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
                              <Body>
                                <Text>{oneMember}</Text>
                              </Body>
                            </ListItem>
                          );
                        })
                        : alert('There is no Member in this Circle')
                      : <ActivityIndicator size="large" color="#0000ff" />
                    : <ActivityIndicator size="large" color="#0000ff" />
                  : <ActivityIndicator size="large" color="#0000ff" />
                : <ActivityIndicator size="large" color="#0000ff" />

            }

          </List>
        </Content>
      </Container>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    user: state.FTReducer.users
  }
}


let mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Circle)