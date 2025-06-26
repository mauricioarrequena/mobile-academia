import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTMDB from '../hooks/useTMDB';
import MovieCard from '../components/MovieCard';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length >= 3) {
        setDebouncedQuery(query);
      } else {
        setDebouncedQuery('');
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const {movies} = useTMDB(
    debouncedQuery ? 'search/movie' : '',
    debouncedQuery ? {query: debouncedQuery} : {},
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#aaa"
          style={styles.searchIcon}
        />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search movies..."
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => (
          <MovieCard movie={item} showTitle={true} isWishListScreen={false} />
        )}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  contentContainerStyle: {
    padding: 8
  }
});
