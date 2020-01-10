import React from 'react';
import { 
  View,
  Image,
  StyleSheet } from 'react-native';

import { Text, Button, Item, Input, Form} from 'native-base';
import AuthScreen from './AuthScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    flex: 3,
    resizeMode: "contain"
  },
  loginForm: {
    flex: 2,
    width: 200,
  },
  button: {
    justifyContent: "center",
  }
});

const LoginScreen = props => {
  const goToHome = () => {
    props.navigation.navigate('Home', {
      message: 'message from screen 1',
    });
  };
  // console.log(props.navigation.state.params);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Android.png')} />
      <Form style={styles.loginForm}>
        <Item floatingLabel>
          <Input placeholder="Username" />
        </Item>
        <Item last>
          <Input floatingLabel placeholder="Password" />
        </Item>
        <Button style={styles.button} dark onPress={goToHome}>
          <Text>Login</Text> 
        </Button>
        <AuthScreen/>
      </Form>
    </View>
  );
};

export default LoginScreen;
