import { StackNavigator } from "react-navigation";

import List from "../src/screens/TrackerList";
import Stats from "../src/screens/Stats";
import AddTracker from "../src/screens/AddTracker";

const Navigator = StackNavigator(
  {
    list: {
      screen: List,
      navigationOptions: {
        title: "Trackers"
      }
    },
    stats: {
      screen: Stats
    },
    addTracker: {
      screen: AddTracker,
      navigationOptions: {
        title: "Add Tracker"
      }
    }
  },
  {
    initialRouteName: "addTracker"
  }
);

export default Navigator;
