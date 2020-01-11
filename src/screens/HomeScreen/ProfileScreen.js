import {RNCamera} from 'react-native-camera';

import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ProfileScreen = props => {
  const [fd, setFd] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Face detector</Text>
      <RNCamera
        style={{flex: 1}}
        type={RNCamera.Constants.Type.front}
        faceDetectionClassifications={
          RNCamera.Constants.FaceDetection.Classifications.all
        }
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        onFacesDetected={face => {
          console.log(JSON.stringify(face));
          //
        }}
      />
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
export default ProfileScreen;
