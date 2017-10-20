import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Head} from './components/Head';
import {FwapController} from './components/FwapController';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Head />
        <FwapController />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
