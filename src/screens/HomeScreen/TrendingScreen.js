import React, {useState} from 'react';
import {Text, View, Button, Image} from 'react-native';
import getMemeUrl from '../../services/getMemeUrl';

const TrendingScreen = props => {
  const goToLogin = () => {
    props.navigation.navigate('Login');
  };

  const [imageUrl, setImageUrl] = useState('');

  const getMeme = async () => {
    const url = await getMemeUrl();
    setImageUrl(url);
    console.log(url);
  };

  return (
    <View style={{padding: 50}}>
      <Text>Trending</Text>
      {/* <Text>{imageUrl}</Text> */}
      <Button title="go to Login" onPress={goToLogin} />
      <Button title="get image" onPress={getMeme} />
      <Image
        style={{width: 350, height: 350}}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  );
};

export default TrendingScreen;
