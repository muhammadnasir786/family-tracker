import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { connect } from "react-redux";
import FTAction from '../store/actions/FTAction';


class AddCircle extends Component {
    constructor() {
        super();
        this.state = {
            circleName: ''
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Circle Name</Label>
                            <Input onChangeText={(text) => { this.setState({ circleName: text }) }}  />
                        </Item>
                        <Button onPress={() => {
                            this.props.addCircle({ circleName: this.state.circleName })
                        }} style={{ margin: 10 }} block rounded info>
                            <Text>Crete Circle</Text>
                        </Button>
                    </Form>
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
        addCircle: (data) => { dispatch(FTAction.addCircle(data)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCircle)