import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Layout from './src/components/Layout';
import Home from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.app}>
      <Layout>
        <Home />
      </Layout>
    </GestureHandlerRootView>
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
