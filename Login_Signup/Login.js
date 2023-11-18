import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { Provider } from 'react-redux';
import DrawerNavigator from '../contact-list/3/screens/routes';
import store from '../Store';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password).then(
        
        
          <DrawerNavigator/>
        
      );
      
      
      
    } catch (e) {
      setError(e.message);
      console.error('Login error:', e.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})