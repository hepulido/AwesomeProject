import React from 'react';
import {View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import {styles} from './styles';

const Singup = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Hector Pulido" />
      <Input label="E-mail" placeholder="Example@gmail.com" />
      <Input label="Password" placeholder="*********" />
    </View>
  );
};

export default Singup;
