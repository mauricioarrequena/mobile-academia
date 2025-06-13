import {FC} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import CarouselHeader from './CarouselHeader';
import {TMDB_IMAGES_BASE_URL} from '@env';

const ItemSeparator = () => {
  return <View style={styles.carouselSeparator} />;
};
interface MovieSectionProps {
  sectionName: string;
  movies: Array<any>;
}
const MovieSection: FC<MovieSectionProps> = ({sectionName, movies}) => {
  return (
    <View id="MovieCarouselSection" style={styles.movieSection}>
      <CarouselHeader categoryName={sectionName} />
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
              <Text style={styles.text} numberOfLines={1}>
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
    borderWidth: 1,
    borderColor: 'red',
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
    width: 100, // Same as image width
    alignItems: 'center',
    gap: 8,
    // borderWidth: 2,
    // borderColor: 'green',
  },
  image: {
    width: 110,
    height: 165,
    borderRadius: 8, // Adjust this value as needed
    overflow: 'hidden', // Ensures rounded corners clip the image correctly (especially on Android)
    // borderWidth: 3,
    // borderColor: 'yellow',
  },
  text: {
    width: '100%', // Confine text to image width
    textAlign: 'center',
    color: 'black',
    // borderWidth: 2,
    // borderColor: 'blue',
  },
});

export default MovieSection;
