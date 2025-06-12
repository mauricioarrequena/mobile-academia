import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    // borderColor: 'brown',
  },
});
