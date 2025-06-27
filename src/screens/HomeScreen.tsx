import {StyleSheet, View} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import MovieRowSection from '../components/MovieRowSection';
import Layout from '../components/Layout';
import Highlight from '../components/Highlight';
import { useThemedStyles } from '../hooks/useThemedStyles';
import { ThemeColors } from '../types/ThemeColors';

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    home: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 30,
      paddingBottom: 30,
      backgroundColor: colors.background,
    },
  });
export default function HomeScreen() {
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);

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
          moviesEndpoint="movie/top_rated"
          showTitleMovie={true}
        />
        <Highlight />
      </View>
    </Layout>
  );
}
