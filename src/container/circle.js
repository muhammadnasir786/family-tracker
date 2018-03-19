import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class Circle extends Component {
    static navigationOptions = {
        title: 'Circle Name , Circle',
    };
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
              <Body>
                <Text>Member Name</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
              <Body>
                <Text>Member Name</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
              <Body>
                <Text>Member Name</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
              <Body>
                <Text>Member Name</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
              <Body>
                <Text>Member Name</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
