import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {View, ScrollView} from 'react-native';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <View style={styles.layout}>
      {/* <Header /> */}
      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    // borderWidth: 5,
    // borderColor: 'green',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    // borderWidth: 3,
    // borderColor: 'blue',
  },
});
