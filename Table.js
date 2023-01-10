import React from 'react';
import {Text} from 'react-native';

class Table extends React.PureComponent {
  constructor(prop) {
    super(prop);
    this.state = {
      isBig: false,
    }
  }

  changeState = () => {
    this.setState({isBig: !this.state.isBig});
  };
  render() {
    console.log('isBig :>>', this.state.isBig);
    return (
      <Text
        style={{fontSize: this.state.isBig ? 24 : 14}}
        onPress={this.changeState}>
        This is a table
      </Text>
    );
  }
}

export default Table;
