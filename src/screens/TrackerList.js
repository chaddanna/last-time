import _ from "lodash";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { List, ListItem } from "react-native-elements";
import { Button, Text as NBText } from "native-base";

import firebase from "firebase";

import defaultStyles from "./default-styles";

class TrackerList extends Component {
  state = {
    trackers: []
  };

  async componentDidMount() {
    const snapshot = await firebase
      .database()
      .ref()
      .once("value");

    const trackers = [];
    _.forOwn(snapshot.val(), (data, id) => {
      trackers.push({ ...data, id });
    });

    this.setState({
      trackers
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <List>{this.getTrackers(this.state.trackers)}</List>
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

  getTrackers(trackers = []) {
    if (_.isEmpty(trackers)) return;

    return trackers.map(tracker => {
      const lastDone = tracker.logs ? tracker.logs[0] : undefined;

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

export default TrackerList;
