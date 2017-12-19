import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigator from "./src/routes";

export default class App extends Component {
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
