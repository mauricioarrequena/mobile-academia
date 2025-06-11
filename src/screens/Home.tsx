import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: '#B3E5FC',
  },
});

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
}
