import React, {useState} from 'react';
import { 
  View,
  Image,
  StyleSheet } from 'react-native';

import { Text, Button, Item, Input, Form, Toast } from 'native-base';
import AuthScreen from './AuthScreen';

import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    flex: 2,
    resizeMode: "contain"
  },
  loginForm: {
    flex: 2,
    width: 200,
    justifyContent: "space-between"
  },
  button: {
    justifyContent: "center",
  }
});

const LoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goToHome = () => {
    props.navigation.navigate('Home', {
      message: 'message from screen 1',
    });
  };

  const register = async () => {
    try {
      Toast.show({
        text: "Signing up...",
      })
      await auth().createUserWithEmailAndPassword(email, password);
      Toast.show({
        text: "Your account was created",
        textStyle: { color: "green" },
        buttonText: "close",
        duration: 3000
      })
    } catch (e) {
      Toast.show({
        text: "Failed to create an account",
        textStyle: { color: "red" },
        buttonText: "close",
        duration: 3000
      })
    }
  };

  const signIn = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  };

  // console.log(props.navigation.state.params);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Android.png')} />
      <Form style={styles.loginForm}>
        <Item>
          <Input placeholder="Email" onChangeText={email => setEmail(email)}/>
        </Item>
        <Item last>
          <Input placeholder="Password" onChangeText={password => setPassword(password)}/>
        </Item>
        <Button style={styles.button} dark onPress={goToHome}>
          <Text>Login</Text> 
        </Button>
        <Button style={styles.button} dark onPress={register}>
          <Text>Sign up</Text> 
        </Button>
        <AuthScreen/>
      </Form>
    </View>
  );
};

export default LoginScreen;
