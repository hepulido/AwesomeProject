import React from 'react';
import {SafeAreaView} from 'react-native';
import Singup from './src/screens/auth/Singup';
import Splash from './src/screens/auth/Splash';

const App = () => {
  return (
    <SafeAreaView>
      <Singup />
    </SafeAreaView>
  );
};

export default App;
