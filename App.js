import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import log from './myScreens/login';
import main from './myScreens/main';
import sign from './myScreens/signUp';
import sen from './myScreens/askAdmin';

export default class AppContainer extends React.Component {

render() {

      const AppNavigator = createStackNavigator({
        Login: {
          screen: log
        },
        Main: {
          screen: main
        },
        SignUp: {
          screen: sign
        },
        Ask: {
          screen: sen
        }
      },
    
        {
          initialRouteName: 'Login',
          headerMode: 'none'
        });

      const AppContainer = createAppContainer(AppNavigator);
      return(
      <AppContainer/>
      );
  }


}