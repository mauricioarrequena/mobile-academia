import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <SafeAreaView style={styles.layout}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
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
