import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const genres = [
  'Action', 'Adventure', 'Animation', 'Comedy',
  'Crime', 'Drama', 'Horror', 'Sci-Fi',
  'Thriller', 'Romance',
];

const SearchScreen = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleGenrePress = (genre: string) => {
    setSelectedGenre(prev => (prev === genre ? null : genre));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>Search</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          placeholder="Search movies..."
          placeholderTextColor="#888"
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setShowFilters(prev => !prev)}>
          <Ionicons name="options-outline" size={22} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Filtros solo ocupan poco espacio */}
      {showFilters && (
        <View style={styles.filterBox}>
          <Text style={styles.filterTitle}>Filter by Genre</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.genreContainer}
          >
            {genres.map((genre) => (
              <TouchableOpacity
                key={genre}
                style={[
                  styles.genrePill,
                  selectedGenre === genre && styles.genrePillSelected,
                ]}
                onPress={() => handleGenrePress(genre)}
              >
                <Text
                  style={[
                    styles.genreText,
                    selectedGenre === genre && styles.genreTextSelected,
                  ]}
                >
                  {genre}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Contenido de estado vacío */}
      <View style={styles.emptyState}>
        <Ionicons name="search" size={40} color="#777" />
        <Text style={styles.emptyTitle}>Search for movies</Text>
        <Text style={styles.emptySubtitle}>
          Find your favorite movies and discover new ones
        </Text>
      </View>
    </KeyboardAvoidingView>
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
  filterBox: {
    marginBottom: 20,
  },
  filterTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  genreContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  genrePill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  genrePillSelected: {
    backgroundColor: '#666',
  },
  genreText: {
    color: '#ccc',
    fontSize: 14,
  },
  genreTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emptySubtitle: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
