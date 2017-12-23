import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import reducers from "./reducers";
import Router from "./Router";
import config from "../config";

export default class App extends Component {
  componentWillMount() {
    // init firebase settings
    firebase.initializeApp({
      apiKey: config.FIREBASE_API,
      authDomain: "manager-94118.firebaseapp.com",
      databaseURL: "https://manager-94118.firebaseio.com",
      projectId: "manager-94118",
      storageBucket: "manager-94118.appspot.com",
      messagingSenderId: "776157936561"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
