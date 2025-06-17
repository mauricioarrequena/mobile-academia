import {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  useColorScheme,
  TouchableOpacity,
  Text,
} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import MovieSection from '../components/MovieSection';
import Layout from '../components/Layout';
import {getMarvelMovies, getTopRatedMovies} from '../utils/TMDBService';
import {useNavigation} from '@react-navigation/native';

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
  const [marvelMovies, setMarvelMovies] = useState<Array<any>>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Array<any>>([]);
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
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
    <Layout>
      <View style={styles.home}>
        <HomeBanner />
        {/* <TouchableOpacity
          style={{
            paddingVertical: 12,
            paddingHorizontal: 35,
            alignItems: 'center',
            borderRadius: 8,
            backgroundColor: '#F2C94C',
          }}
          onPress={() => navigation.navigate('Silder')}>
          <Text style={{color: 'white', fontSize: 20}}>Go to the slider</Text>
        </TouchableOpacity> */}
        <MovieSection sectionName="Marvel Movies" movies={marvelMovies} />
        <MovieSection sectionName="Top Rated Movies" movies={topRatedMovies} />
      </View>
    </Layout>
  );
}
