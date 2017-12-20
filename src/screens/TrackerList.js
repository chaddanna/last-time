import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { List, ListItem } from "react-native-elements";
import { Button, Text as NBText } from "native-base";

import defaultStyles from "./default-styles";

class TrackerList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <List>{this.getTrackers(trackers)}</List>
        </View>

        <View style={styles.actions}>
          <Button
            title="Add Tracker"
            full
            large
            info
            onPress={() => this.props.navigation.navigate("addTracker")}
          >
            <NBText>Add Tracker</NBText>
          </Button>
        </View>
      </View>
    );
  }

  getTrackers(trackers) {
    return trackers.map(tracker => {
      const lastDone = tracker.logs[0];

      return (
        <ListItem
          key={tracker.id}
          title={tracker.name}
          subtitle={lastDone}
          onPress={() => this.props.navigation.navigate("details")}
        />
      );
    });
  }
}

const styles = StyleSheet.create({
  ...defaultStyles
});

const trackers = [
  {
    name: "worked on CSS course",
    id: "number1",
    logs: ["friday", "monday"]
  },
  {
    name: "clean room",
    id: "number2",
    logs: []
  },
  {
    name: "charged band",
    id: "number3",
    logs: []
  }
];

export default TrackerList;
