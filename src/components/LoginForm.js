import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardItem, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSuccess();
        return;
      })
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password))
      .then(() => this.onLoginSuccess())
      .catch(() => this.onLoginFail());
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: '',
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authenticion Failed', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>

        <CardItem>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>

        <Text style={styles.errorTextStyle}>
          {this.state.error }
        </Text>

        <CardItem>
          {this.renderButton()}
        </CardItem>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
