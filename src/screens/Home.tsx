import {View, StyleSheet} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import MovieSection from '../components/MovieSection';
import {useEffect, useState} from 'react';
import {getMarvelMovies, getTopRatedMovies} from '../utils/TMDBService';

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'yellow',
    gap: 30,
  },
});

export default function Home() {
  const [marvelMovies, setMarvelMovies] = useState<Array<any>>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Array<any>>([]);

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
      <HomeBanner />
      <MovieSection sectionName="Marvel Movies" movies={marvelMovies} />
      <MovieSection sectionName="Top Rated Movies" movies={topRatedMovies} />
    </View>
  );
}
