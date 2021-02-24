import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as tf from '@tensorflow/tfjs';
import { fetch } from '@tensorflow/tfjs-react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false
    };
  }

  async componentDidMount() {
    // Wait for tf to be ready
    await tf.ready();
    // Signal to the app that tensorflow.js can now be used
    this.setState({
      isTfReady: true
    });

    console.log(this.state.isTfReady);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TensorFlow.js ready? {this.state.isTfReady ? <Text>Yes</Text> : 'Not yet'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
