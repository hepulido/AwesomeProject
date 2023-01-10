import React from 'react';
import {Text, Image, View} from 'react-native';
import {styles} from './styles';

const Splash = () => {
  return (
    <View>
      <Image style={styles.image} source={require('./splash_image.png')} />
      <Text>You'll find All you need here!</Text>
    </View>
  );
};

export default Splash;
