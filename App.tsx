import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Contact from './screens/Contact'
import ContactListItem from './Components/ContactListItem'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contacts from './screens/Contact';
import Home from "./Components/index"
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screens/Profile';


const Drawer = createDrawerNavigator();
const Satck = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Satck.Navigator initialRouteName='Contact'>
        <Satck.Screen name='Contact' component={Contact}/>
        <Satck.Screen name='Profile' component={Profile}/>
      </Satck.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:3,
    justifyContent: 'center'
  },
})