import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBG96z3N1ySE2D4qe1D1zyOAcsuavfPja8',
      authDomain: 'reactnativetutorialauth.firebaseapp.com',
      databaseURL: 'https://reactnativetutorialauth.firebaseio.com',
      projectId: 'reactnativetutorialauth',
      storageBucket: 'reactnativetutorialauth.appspot.com',
      messagingSenderId: '966368467916'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
