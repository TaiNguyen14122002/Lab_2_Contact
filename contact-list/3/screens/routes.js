import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Contacts from '../../../screens/Contact';
import Profile from '../../../screens/Profile';
import Favorites from './Favorites';
import User from './User';
import Options from './Options';
import AntDesign from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utility/colors';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const getDrawerItemIcon = icon => ({ tintColor }) => (
    <AntDesign name={icon} size={22} style={{ color: tintColor }} />
);



const getTabBarIcon = icon => ({ tintColor }) => (
    <AntDesign name={icon} size={26} style={{ color: tintColor }} />
);

const Stack = createStackNavigator();
const ContactsScreens = () => {
  return (
        
            <Stack.Navigator 
                                // initialRouteName="Contacts"
                                // screenOptions={{
                                //     headerTintColor: 'white',
                                //     headerStyle: {backgroundColor: 'tomato'},
                                //     headerTitleAlign: 'center',
                                    
                                // }}
                                initialRouteName="Contacts"
                                screenOptions={
                                    {
                                        headerShown: false
                                    }
                                }
                            >
                <Stack.Screen name= 'Contacts' component={Contacts} 
                options={{title:"Contacts"}}/>
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
  );
}

const FavoritesScreens = () =>{
    return (
        <Stack.Navigator initialRouteName="Favorites" s
        creenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Favorites' component={Favorites} options={{title:"Favorites"}}/>
            <Stack.Screen name='Profile' component={Profile} options={{title:"Profile"}}/>
        </Stack.Navigator>
    );
}

const UserScreens = ({navigation}) =>{
    return (
        <Stack.Navigator initialRouteName="User">
            <Stack.Screen name='User' component={User}
            options={{
                headerTitle: "Me",
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: colors.blue,
                },
                headerRight: () =>(
                    <AntDesign
                        name="cog"
                        size={24}
                        style={{color: 'white', marginRight:10}}
                        onPress={()=> navigation.navigate('Options')}/>
                ),
            }}/>
            <Stack.Screen name='Options' component={Options} options={{tabBarIcon: getTabBarIcon('ocg')}}/>
        </Stack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = ()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='ContactsScreens'
                
                >
                    <Tab.Screen name="ContactsScreens" component={ContactsScreens}
                    options={{
                        tabBarIcon: getTabBarIcon('home'),
                    }}/>
                    <Tab.Screen name="FavoritesScreens" component={FavoritesScreens}
                    options={{
                        tabBarIcon: getTabBarIcon('star'),
                    }}/>
                    <Tab.Screen name="UserScreens" component={UserScreens}
                    options={{
                        tabBarIcon: getTabBarIcon('user'),
                    }}/>
                </Tab.Navigator>
        </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
    
    return (
        <NavigationContainer>
            
            <Tab.Navigator 
                initialRouteName='ContactsScreens'
                >
                    
                    <Drawer.Screen name="ContactsScreens" component={ContactsScreens}
                    options={{
                        drawerIcon: getDrawerItemIcon('home'),
                    }}/>
                    <Drawer.Screen name="FavoritesScreens" component={FavoritesScreens}
                    options={{
                        drawerIcon: getDrawerItemIcon('star'),
                    }}/>
                    <Drawer.Screen name="UserScreens" component={UserScreens}
                    options={{
                        drawerIcon: getDrawerItemIcon('user'),
                        
                    }}/>
                </Tab.Navigator>
        </NavigationContainer>
    )
}

// export default TabNavigator
export default TabNavigator;

const styles = StyleSheet.create({})