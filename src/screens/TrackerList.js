import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, List, ListItem } from "react-native-elements";

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
            large
            onPress={() => this.props.navigation.navigate("addTracker")}
          />
        </View>
      </View>
    );
  }

  getTrackers(trackers) {
    return trackers.map(tracker => {
      const lastDone = tracker.logs[0];

      return (
        <ListItem key={tracker.id} title={tracker.name} subtitle={lastDone} />
      );
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7"
  },
  content: {
    flex: 3
  },
  actions: {
    flex: 1,
    justifyContent: "flex-end"
  }
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
