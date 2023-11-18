import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Contact from './screens/Contact'
import { NavigationContainer } from '@react-navigation/native';
import routes from "./contact-list/3/screens/routes"
import Profile from './screens/Profile';
import Favorites from './contact-list/3/screens/Favorites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import store from './Store';
import DrawerNavigator from './contact-list/3/screens/routes';
import SignupScreen from './Login_Signup/SignUp';
import Login from './Login_Signup/Login';
import auth from '@react-native-firebase/auth';


const App = ({navigation}) =>  {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const unsubscribeAuthStateChanged = auth().onAuthStateChanged(
            (user) => {
                setUser(user);
                setIsLoading(false);
            }
        );
        return () => unsubscribeAuthStateChanged();
    }, []);
    if(user != null){
      return (
          <Provider store={store}>
            <DrawerNavigator/>
          </Provider>
        );
    }
    else{
      return (
        <Login/>
      );
    }
}


export default App;

const styles = StyleSheet.create({
  
})