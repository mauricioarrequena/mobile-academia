import {StyleSheet, View, useColorScheme} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import MovieRowSection from '../components/MovieRowSection';
import Layout from '../components/Layout';
import useTMDB from '../hooks/useTMDB';

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    home: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 32,
      backgroundColor: isDarkMode ? '#000' : '#fff',
      // borderWidth: 1,
      // borderColor: 'yellow',
    },
  });
export default function HomeScreen() {
  const {movies: marvelMovies} = useTMDB('discover/movie', {
    sort_by: 'popularity.desc',
    with_companies: 420,
  });
  const {movies: topRatedMovies} = useTMDB('tv/top_rated', {
    language: 'en-US',
    page: 1,
  });
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <Layout>
      <View style={styles.home}>
        <HomeBanner />
        <MovieRowSection sectionName="Marvel Movies" movies={marvelMovies} />
        <MovieRowSection sectionName="Top Rated Movies" movies={topRatedMovies} />
      </View>
    </Layout>
  );
}
