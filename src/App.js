import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBG96z3N1ySE2D4qe1D1zyOAcsuavfPja8',
      authDomain: 'reactnativetutorialauth.firebaseapp.com',
      databaseURL: 'https://reactnativetutorialauth.firebaseio.com',
      projectId: 'reactnativetutorialauth',
      storageBucket: 'reactnativetutorialauth.appspot.com',
      messagingSenderId: '966368467916'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.viewStyle}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.viewStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 10,
    flexDirection: 'row'
  }
};

export default App;
