import React from 'react';
import{image} from 'react-native';
import {CreateBottomTabNavigator} from 'react-native-tabs';
import BookDonateScreen from '../screens/BookDonateScreen'
import BookRequestScreen from '../screens/BookRequestScreen'


export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks : {
      screen: BookDonateScreen,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "Donate Books",
      }
    },
    BookRequest:{
        screen: BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assests/request-book.png")} style={{width:20,height:20}}/>,
            tabBarLabel:"Book Request",
        }
    }   
    });