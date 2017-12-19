import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import { FormLabel, FormInput } from "react-native-elements";

class AddTracker extends Component {
  static navigationOptions = {
    title: "Add Tracker"
  };

  render() {
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <FormInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F7F7F7"
  }
});

export default AddTracker;
