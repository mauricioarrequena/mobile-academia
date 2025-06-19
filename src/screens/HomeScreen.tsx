import {StyleSheet, View, useColorScheme} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import MovieSection from '../components/MovieSection';
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
export default function Home() {
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
        <MovieSection sectionName="Marvel Movies" movies={marvelMovies} />
        <MovieSection sectionName="Top Rated Movies" movies={topRatedMovies} />
      </View>
    </Layout>
  );
}
