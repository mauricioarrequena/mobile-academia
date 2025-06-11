import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Silder from './Silder';
import {getPopularMovies} from '../utils/TMDBService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#B3E5FC',
  },
});

const Home = () => {
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const popularMoviesData = await getPopularMovies();
      return popularMoviesData;
    };

    fetchPopularMovies().then(data => console.log(data));
  }, []);

  return (
    <View style={styles.container}>
      <Silder />
    </View>
  );
};
export default Home;
