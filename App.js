import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigator from "./src/routes";

import firebase from "firebase";
import config from "./src/secret/firebase";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
