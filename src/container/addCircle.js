import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text} from 'native-base';
export default class AddCircle extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Circle Name</Label>
                            <Input />
                        </Item>
                        <Button style={{ margin : 10}} block rounded info>
                            <Text>Crete Circle</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}