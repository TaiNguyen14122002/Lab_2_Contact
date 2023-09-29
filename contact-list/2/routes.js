import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Contacts from '../../screens/Contact';
import Profile from '../../screens/Profile';
import colors from '../../utility/colors';

const Stack = createStackNavigator();
const routes = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator 
                                initialRouteName="Contacts"
                                screenOptions={{
                                    headerTintColor: 'white',
                                    headerStyle: {backgroundColor: 'tomato'},
                                    headerTitleAlign: 'center',
                                }}
                            >
                <Stack.Screen name= 'Contacts' component={Contacts} options={{title:"Contacts"}}/>
                <Stack.Screen 
                                name= 'Profile' 
                                component={Profile} 
                                options={({route}) =>
                                    {
                                        const {contact} = route.params;
                                        const {name} = contact;
                                        return {
                                            title: name.split(' ')[0],
                                            headerTintColor: 'white',
                                            headerStyle: {
                                                backgroundColor: colors.blue,
                                            }
                                        };
                                    }
                                }
                            />

            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default routes

const styles = StyleSheet.create({})