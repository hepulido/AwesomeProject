import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import Button from '../../../components/Button';
import {styles} from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('./splash_image.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}> You'll find </Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}> Here! </Text>
      </View>
      <Button title="Sing Up" />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}> Sing in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
