import {StyleSheet, View, useColorScheme} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import MovieRowSection from '../components/MovieRowSection';
import Layout from '../components/Layout';
import Highlight from '../components/Highlight';

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    home: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 30,
      paddingBottom: 30,
      backgroundColor: isDarkMode ? '#0a0a0b' : '#ffffff',
    },
  });
export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <Layout>
      <View style={styles.home}>
        <HomeBanner />
        <MovieRowSection
          sectionName="Marvel studios"
          moviesEndpoint="discover/movie"
          endpointParams={{sort_by: 'popularity.desc', with_companies: 420}}
          showTitleMovie={true}
        />
        <MovieRowSection
          sectionName="Top Rated Movies"
          moviesEndpoint="tv/top_rated"
          showTitleMovie={true}
        />
        <Highlight />
      </View>
    </Layout>
  );
}
