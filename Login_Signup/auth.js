import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'

import DrawerNavigator from '../contact-list/3/screens/routes';
import { NavigationContainer } from '@react-navigation/native';

const Login = (email, password) => {
    if (!email || !password) {
        Alert.alert('Enter Details') // Thêm "alert" sau "Alert" và sử dụng "Alert.alert" để hiển thị thông báo
    } else {
        auth().signInWithEmailAndPassword(email.trim(), password)
        .then(() => {
            console.log("tai");
            <DrawerNavigator/>
        })
        .catch(err => Alert.alert(err.code, err.message)) // Sử dụng "Alert.alert" để hiển thị lỗi
    }
}

const Auth = {
    Login
}

export default Auth

const styles = StyleSheet.create({})
