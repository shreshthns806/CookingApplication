//Importing Libraries
import * as React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginSignupScreen from './screens/LoginSignup'
import HomeScreen from './screens/HomeScreen'
import AddRecipe from './screens/AddRecipe'
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {DrawerNavigator} from './components/DrawerNavigator';

//Exporting and Initialising Class
export default class App extends React.Component {
  
  //Render function
  render(){
    
    //Return statement
    return(
      <AppContainer></AppContainer>
    )
  }
}

//Creating Switch Navigator
const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen:WelcomeScreen},
  LoginScreen : {screen:LoginSignupScreen},
  Drawer : {screen:DrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator)