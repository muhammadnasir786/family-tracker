import React, { Component } from "react";
import { Platform } from "react-native";
import {
    Container, Header, Title, Content, Button, Input, Icon, Label, Text, Right, Body, Left, Picker, Form,
    Item as FormItem
} from "native-base";
const Item = Picker.Item;
export default class AddMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: "key1"
        };
    }
    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }
    static navigationOptions = {
        title: 'Add Member Here !',
      
    };
    render() {
        return (
            <Container>
                <Content>
                    <Text>Select Circle First</Text>
                    <Form>
                        <Picker
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Item label="Circle Name" value="Circle Name" />
                            <Item label="Circle Name" value="Circle Name" />
                            <Item label="Circle Name" value="Circle Name" />
                            <Item label="Circle Name" value="Circle Name" />
                            <Item label="Circle Name" value="Circle Name" />
                            <Item label="Circle Name" value="Circle Name" />
                        </Picker>
                    </Form>
                    <Input placeholder="Member Email" />
                    <Button style={{ margin: 10 }} block rounded info>
                        <Text>Add Member</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}