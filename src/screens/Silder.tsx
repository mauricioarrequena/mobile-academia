import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getPopularMovies} from '../utils/TMDBService';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: '#B3E5FC',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
});
export default function Silder() {
  const handleOnPressApi = async () => {
    const movies = await getPopularMovies();
    console.log(movies);

    // try {
    //   const response = await axios.get(
    //     `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    //   );
    //   console.log('TMDB response:', response.data);
    // } catch (error) {
    //   console.error('TMDB error:', error);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>My List</Text>
        <Text>discover</Text>
      </View>
      <View style={styles.content}>
        <Text>1</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.text}>whislist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.text}>details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleOnPressApi}>
          <Text style={styles.text}>call the api</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
