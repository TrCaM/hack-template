import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const PlayScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Face detector</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'black',
  },
});
export default PlayScreen;
