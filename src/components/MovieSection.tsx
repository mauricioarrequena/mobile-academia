import {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useColorScheme,
} from 'react-native';
import SectionRowHeader from './SectionRowHeader';
import {TMDB_IMAGES_BASE_URL} from '@env';

const ItemSeparator = () => {
  return <View style={styles.carouselSeparator} />;
};

interface MovieSectionProps {
  sectionName: string;
  movies: Array<any>;
}

const MovieSection: FC<MovieSectionProps> = ({sectionName, movies}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const themedStyles = getThemedStyles(isDarkMode);

  return (
    <View
      id="MovieCarouselSection"
      style={[styles.movieSection, themedStyles.movieSection]}>
      <SectionRowHeader categoryName={sectionName} />
      <View id="carousel" style={styles.carousel}>
        <FlatList
          data={movies}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparator}
          style={styles.flatList}
          renderItem={({item}) => (
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

const getThemedStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    movieSection: {
      borderColor: isDarkMode ? '#888' : 'red',
    },
    text: {
      color: isDarkMode ? '#fff' : 'black',
    },
  });

export default MovieSection;
