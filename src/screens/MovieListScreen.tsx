import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import { mockMovies } from '../utils/mockMovies';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
});

const MovieListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        style={{
          borderWidth: 2,
          borderColor: 'blue',
          borderRadius: 8,
          margin: 10,
        }}
        data={mockMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
};

export default MovieListScreen;
