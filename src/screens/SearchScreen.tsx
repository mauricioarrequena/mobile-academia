import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTMDB from '../hooks/useTMDB';
import MovieCard from '../components/MovieCard';
import {useThemedStyles} from '../hooks/useThemedStyles';
import {ThemeColors} from '../types/ThemeColors';

const NUMBER_OF_COLUMNS = 3;

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);

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
        numColumns={NUMBER_OF_COLUMNS}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <MovieCard movie={item} showTitle={true} isWishListScreen={false} />
        )}
      />
    </View>
  );
};

export default SearchScreen;

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
      paddingTop: 60,
    },
    title: {
      color: colors.text,
      fontSize: 24,
      fontFamily: 'Gilroy-SemiBold',
      marginBottom: 20,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.background,
      borderWidth: 2,
      borderColor: '#F2C94C',
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
      color: colors.text,
      fontSize: 16,
      fontFamily: 'Gilroy-Medium',
    },
    columnWrapperStyle: {
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    contentContainerStyle: {
      padding: 8,
    },
  });
