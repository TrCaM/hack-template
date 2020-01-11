import React from 'react';
import {Text, View, Button} from 'react-native';
import { Container } from 'native-base';
import MemeList from '../../../src/components/MemeList';

const TrendingScreen = props => {
  const goToLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <Container>
      <Button title="go to Login" onPress={goToLogin} />
      <MemeList />
    </Container>
  );
};

export default TrendingScreen;
