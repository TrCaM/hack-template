import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginScreen from './screens/LoginScreen';
import HomeNavigator from './screens/HomeScreen/HomeNavigator';
// import { createBottomTabNavigator } from "react-navigation-tabs";

//   const MainNavigator = createStackNavigator({
//   Screen1: { screen: Screen1 },
//   Screen2: { screen: Screen2 }
// });

// const MainNavigator = createSwitchNavigator({
const MainNavigator = createSwitchNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeNavigator},
});
// const TabNavigator = createBottomTabNavigator({
//     Screen1: Screen1,
//     Screen2: Screen2,
//     Screen3: Screen3
// });

export default createAppContainer(MainNavigator);
