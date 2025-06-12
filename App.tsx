import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      <Home />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
