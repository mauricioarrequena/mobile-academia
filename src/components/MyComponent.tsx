import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const MyComponent = () => {
  const colorScheme = useColorScheme(); // 'light' or 'dark'

  return (
    <View style={[styles.container, colorScheme === 'dark' ? styles.dark : styles.light]}>
      <Text style={colorScheme === 'dark' ? styles.textDark : styles.textLight}>
        {colorScheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    backgroundColor: '#000',
  },
  light: {
    backgroundColor: '#fff',
  },
  textDark: {
    color: '#fff',
  },
  textLight: {
    color: '#000',
  },
});

export default MyComponent;
