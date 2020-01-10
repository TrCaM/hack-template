import React from 'react';
import {Text, View, Button} from 'react-native';

const LoginScreen = props => {
  const goToHome = () => {
    props.navigation.navigate('Home', {
      message: 'message from screen 1',
    });
  };
  // console.log(props.navigation.state.params);
  return (
    <View style={{padding: 100}}>
      <Text>Login</Text>
      <Button title="go to HOME" onPress={goToHome} />
    </View>
  );
};

export default LoginScreen;
