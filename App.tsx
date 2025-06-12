import React from 'react';
import { SafeAreaView } from 'react-native';
import MovieListScreen from './src/screens/MovieListScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MovieListScreen />
    </SafeAreaView>
  );
};

export default App;
