import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
const Chair = ({theme}) => {
  const [isBig, setIsBig] = useState(false);

  console.log('isBig :>>', isBig);
  const changeState = () => {
    setIsBig(!isBig);
  };
  return (
    <Text
      style={{
        fontSize: isBig ? 24 : 14,
        color: theme === 'dark' ? 'grey' : 'purple'
      }}
      onPress={changeState}>
      this is chair
    </Text>
  );
};

export default Chair;
