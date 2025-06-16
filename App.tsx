import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Layout from './src/components/Layout';
import Home from './src/screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.app}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Layout>
          <Home />
        </Layout>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // borderWidth: 3,
    // borderColor: 'red',
  },
});

export default App;
