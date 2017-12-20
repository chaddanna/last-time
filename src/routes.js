import { StackNavigator } from "react-navigation";

import List from "./screens/TrackerList";
import AddTracker from "./screens/AddTracker";
import { Navigator as DetailNavigator } from "./screens/details";

const Navigator = StackNavigator(
  {
    list: {
      screen: List,
      navigationOptions: {
        title: "Trackers"
      }
    },
    details: {
      screen: DetailNavigator
    },
    addTracker: {
      screen: AddTracker,
      navigationOptions: {
        title: "Add Tracker"
      }
    }
  },
  {
    // initialRouteName: "details"
  }
);

export default Navigator;
