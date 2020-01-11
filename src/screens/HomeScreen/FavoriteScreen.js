import React from 'react';
import {Text, View} from 'react-native';
import MemeList from '../../../src/components/MemeList';
import { Container } from 'native-base';

const FavoriteScreen = props => {
  return (
    <Container> 
      <MemeList>
      </MemeList>
    </Container>

  );
};

export default FavoriteScreen;
