import React, {Component} from 'react';
import NewsFeed from './views/NewsFeed';
import NewsPage from './views/NewsPage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export class Main extends Component {
  render() {
    return <AppContainer />;
  }
}
const AppNavigator = createStackNavigator(
  {
    NewsFeed,
    NewsPage,
  },
  {
    defaultNavigationOptions: {
      headerTintColor:'#0008ff'
    },
  },
);
const AppContainer = createAppContainer(AppNavigator);

export default Main;
