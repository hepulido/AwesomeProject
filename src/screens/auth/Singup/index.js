import React from 'react';
import {View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import {styles} from './styles';

const Singup = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sing up" />
    </View>
  );
};

export default Singup;
