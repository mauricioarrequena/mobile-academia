import { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useColorScheme,
} from 'react-native';
import MovieRowSectionHeader from './MovieRowSectionHeader';
import { TMDB_IMAGES_BASE_URL } from '@env';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types'; // adjust path
import useTMDB from '../hooks/useTMDB';

const styles = StyleSheet.create({
  movieSection: {
    gap: 15,
    paddingHorizontal: 25,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  carousel: {
    // borderWidth: 3,
    // borderColor: 'green',
  },
  flatList: {
    // borderWidth: 5,
    // borderColor: 'purple',
  },
  carouselSeparator: {
    width: 28,
    // borderWidth: 2,
    // borderColor: 'orange',
  },
  movieItem: {
    width: 100,
    alignItems: 'center',
    gap: 8,
    // borderWidth: 2,
    // borderColor: 'green',
  },
  image: {
    width: 110,
    height: 165,
    borderRadius: 8,
    overflow: 'hidden',
    // borderWidth: 3,
    // borderColor: 'yellow',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    color: 'black',
    // borderWidth: 2,
    // borderColor: 'blue',
  },
});
const getThemedStyles = (isDarkMode: boolean) => StyleSheet.create({
  movieSection: {
    borderColor: isDarkMode ? '#888' : 'red',
  },
  text: {
    color: isDarkMode ? '#fff' : 'black',
  },
});

interface MovieSectionProps {
  sectionName: string;
  moviesEndpoint: string;
  endpointParams?: any;
}
const ItemSeparator = () => {
  return <View style={styles.carouselSeparator} />;
};
const MovieRowSection: FC<MovieSectionProps> = ({ sectionName, moviesEndpoint, endpointParams }) => {
  const { movies } = useTMDB(moviesEndpoint, endpointParams);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const themedStyles = getThemedStyles(isDarkMode);
  const displayedMovies = movies.slice(0, 5);

  const handleOnPressSeeMore = () => {
    navigation.navigate('SectionScreen', {
      categoryName: sectionName,
      endpoint: moviesEndpoint,
      params: endpointParams,
    });
  };

  return (
    <View
      id="MovieCarouselSection"
      style={[styles.movieSection, themedStyles.movieSection]}>
      <MovieRowSectionHeader categoryName={sectionName} onPressSeeMore={handleOnPressSeeMore} />
      <View id="carousel" style={styles.carousel}>
        <FlatList
          data={displayedMovies}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparator}
          style={styles.flatList}
          renderItem={({ item }) => (
            <View style={styles.movieItem}>
              <Image
                source={{
                  uri: `${TMDB_IMAGES_BASE_URL}/w185${item.poster_path}`,
                }}
                style={styles.image}
              />
              <Text style={[styles.text, themedStyles.text]} numberOfLines={1}>
                {item.title ? item.title : item.name}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default MovieRowSection;
