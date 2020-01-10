import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TrendingScreen from './TrendingScreen';
import FavoriteScreen from './FavoriteScreen';
import ProfileScreen from './ProfileScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Trending: TrendingScreen,
    Favorite: FavoriteScreen,
    Profile: ProfileScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const HomeNavigator = createAppContainer(TabNavigator);

export default HomeNavigator;
