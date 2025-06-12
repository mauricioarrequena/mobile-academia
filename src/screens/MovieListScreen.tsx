import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import { mockMovies } from '../utils/mockMovies';

const MovieListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default MovieListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
});
