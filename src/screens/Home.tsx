import React from 'react';
import {StyleSheet, View} from 'react-native';
import Silder from './Silder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#B3E5FC',
  },
});

export default function Home() {
  return (
    <View style={styles.container}>
      <Silder />
    </View>
  );
}
