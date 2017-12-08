import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import List from './src/screens/List';
import Stats from './src/screens/Stats';

export default class App extends Component {
  render() {
    const Navigator = StackNavigator({
      list: {
        screen: List
      },
      stats: {
        screen: Stats
      }
    });

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
    backgroundColor: '#fff'
  }
});
