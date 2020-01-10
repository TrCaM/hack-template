import React from 'react';
import {Text, View, Button} from 'react-native';

const TrendingScreen = props => {

    const goToLogin = () => {
        props.navigation.navigate('Login')};

  return (
    <View style={{padding: 100}}>
      <Text>Trending</Text>
          <Button title="go to Login" onPress={goToLogin} />
    </View>
  );
};

export default TrendingScreen;
