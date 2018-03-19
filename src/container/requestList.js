import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Button,Thumbnail,Right, Text, Body , Icon } from 'native-base';
export default class RequestList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
            <Icon active name="logo-googleplus" />
              <Body style={{ flexDirection : 'row' }}>
                <Text style={{ flex : .5 , paddingTop : 10}}>Circle Name</Text>
                <Button style={{ flex : .5 }} success><Text> Confrim</Text></Button>
                <Button style={{ flex : .5 }} danger><Text> Cancel</Text></Button>
             </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
