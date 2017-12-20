import { TabNavigator } from "react-navigation";

import Stats from "./stats";
import Edit from "./edit";
import Log from "./log";

const Navigator = TabNavigator({
  stats: {
    screen: Stats
  },
  edit: {
    screen: Edit
  },
  log: {
    screen: Log
  }
});

export { Navigator };
