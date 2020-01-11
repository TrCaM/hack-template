import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TrendingScreen from './TrendingScreen';
import FavoriteScreen from './FavoriteScreen';
import ProfileScreen from './ProfileScreen';
// import PlayScreen from './PlayScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Trending: TrendingScreen,
    Favorite: FavoriteScreen,
    Camera: ProfileScreen,
    // Start: PlayScreen,
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
