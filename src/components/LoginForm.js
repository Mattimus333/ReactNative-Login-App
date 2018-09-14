import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardItem } from './common';

class LoginForm extends Component {
  state = { text: '' }

  render() {
    return (
      <Card>
        <CardItem>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
          />
        </CardItem>
        <CardItem />
        <CardItem>
          <Button>
            Log In
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;