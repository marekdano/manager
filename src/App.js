import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>HELLO</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
