import React from 'react';
import {Text, View} from 'react-native';
import MemeList from '../../../src/components/MemeList';
import { Container } from 'native-base';
import FavoriteList from '../../components/FavoriteList';

const FavoriteScreen = props => {
  return (
    <Container>    
      <FavoriteList />
    </Container>

  );
};

export default FavoriteScreen;
