import {View, StyleSheet, useColorScheme} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import MovieSection from '../components/MovieSection';
import {useEffect, useState} from 'react';
import {getMarvelMovies, getTopRatedMovies} from '../utils/TMDBService';
import MyComponent from '../components/MyComponent';
import OverlayExample from '../components/OverlayExample';

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    home: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? '#000' : '#fff',
      borderWidth: 1,
      borderColor: isDarkMode ? '#555' : 'yellow',
      gap: 30,
    },
  });

export default function Home() {
  const [marvelMovies, setMarvelMovies] = useState<Array<any>>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Array<any>>([]);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  useEffect(() => {
    const fetchMarvelMovies = async () => {
      const fetchedMarvelMovies = await getMarvelMovies();
      setMarvelMovies(fetchedMarvelMovies);
    };
    const fetchTopRatedMovies = async () => {
      const fetchedTopRatedMovies = await getTopRatedMovies();
      setTopRatedMovies(fetchedTopRatedMovies);
    };

    fetchMarvelMovies();
    fetchTopRatedMovies();
  }, []);

  return (
    <View style={styles.home}>
      <MyComponent />
      <OverlayExample />
      <HomeBanner />
      <MovieSection sectionName="Marvel Movies" movies={marvelMovies} />
      <MovieSection sectionName="Top Rated Movies" movies={topRatedMovies} />
    </View>
  );
}
