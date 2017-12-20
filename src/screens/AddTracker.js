import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import { Button, Text as NBText } from "native-base";

import defaultStyles from "./default-styles";

class AddTracker extends Component {
  static navigationOptions = {
    title: "Add Tracker"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <FormLabel>Name</FormLabel>
          <FormInput />
        </View>
        <View style={styles.actions}>
          <Button
            title="Add Tracker"
            full
            large
            success
            onPress={() => this.props.navigation.navigate("addTracker")}
          >
            <NBText>Add Tracker</NBText>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...defaultStyles
});

export default AddTracker;
