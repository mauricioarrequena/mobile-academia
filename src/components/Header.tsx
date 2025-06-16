import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, {paddingTop: insets.top}]}>
      <Text>this is the header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // height: 60,
    // height: 0,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 3,
    // borderColor: 'orange',
    // backgroundColor: '#6200ee', // example purple or whatever color
    backgroundColor: 'transparent',
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
