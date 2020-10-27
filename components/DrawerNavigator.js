//Importing Libraries
import React from 'react';
import {Icon} from 'react-native-elements'
import {createDrawerNavigator} from 'react-navigation-drawer'
import HomeScreen from '../screens/HomeScreen'
import AddRecipeScreen from '../screens/AddRecipe'

//Exporting and creating constant
export const DrawerNavigator = createDrawerNavigator({
    HomeScreen: {
        screen : HomeScreen,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon : <Icon
                            name = 'home'
                            type = 'font-awesome'
                        ></Icon>
        }
    },
    AddRecipe : {
        screen : AddRecipeScreen,
        navigationOptions : {
            drawerLabel : 'Add Recipes',
            drawerIcon : <Icon
                            name = 'bars'
                            type = 'font-awesome'
                        ></Icon>
        }
    }
},{
    initialRouteName : 'HomeScreen'
}

)