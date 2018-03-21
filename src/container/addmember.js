import React, { Component } from "react";
import { Platform } from "react-native";
import FTAction from "../store/actions/FTAction";
import { connect } from "react-redux";
import {
    Container, Header, Title, Content, Button, Input, Icon, Label, Text, Right, Body, Left, Picker, Form,
    Item as FormItem
} from "native-base";
const Item = Picker.Item;


class AddMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    static navigationOptions = {
        title: 'Add Member Here !',

    };
    render() {
        const { params } = this.props.navigation.state;
        const circleKey = params ? params.circleKey : null;

        return (
            <Container>
                <Content>
                    {/* <Text>Select Circle First</Text> */}
                    {
                        // alert(params.circleKey)
                    }
                    {/* <Form>
                        <Picker
                            mode="dropdown"
                            placeholder="Select One"
                            note={false}
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Item label="Wallet" value="key0" />
                        </Picker>
                    </Form> */}
                    <Input onChangeText={(text) => {
                        this.setState({ email: text });
                    }} placeholder="Member Email" />


                    <Button onPress={() => {
                        if (this.props.user !== undefined) {
                            let flage = false;
                            Object.keys(this.props.user).map((uid) => {
                                let oneUser = this.props.user[uid];
                                // alert(oneUser.userData.email)
                                if (oneUser.userData.email === this.state.email) {
                                    flage = true;
                                }
                            })
                            if (flage) {
                                let member = {
                                    circleKey: circleKey,
                                    email: this.state.email
                                }
                                this.props.addMember(member);
                                alert('member Add SuccessFully')
                            } else {
                                alert('There is no user exist with this email')
                            }
                        }

                        this.setState({ email: '' })
                    }} style={{ margin: 10 }} block rounded info>
                        <Text>Add Member</Text>
                    </Button>
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
        addMember: (data) => { dispatch(FTAction.addMember(data)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMember)
