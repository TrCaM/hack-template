import React from 'react';
import {Container} from 'native-base';
import MemeList from '../../../src/components/MemeList';
// import getMemeList from '../../'

const TrendingScreen = props => {
  return (
    <Container>
      <MemeList />
    </Container>
  );
};

export default TrendingScreen;
