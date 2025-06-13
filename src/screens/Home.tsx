import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {Pagination} from 'react-native-reanimated-carousel';
import {getPopularMovies} from '../utils/TMDBService';
import {Image} from 'react-native'; // Add this import at the top
import CarouselHeader from '../components/CarouselHeader';

export default function Home() {
  const progress = useSharedValue(0);
  const {width: screenWidth} = Dimensions.get('window');
  const carouselHeight = 550;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const responseMovies = await getPopularMovies();
      setMovies(responseMovies);
    }

    fetchPopularMovies();
  }, []);

  return (
    <View style={styles.home}>
      <Text>.</Text>
      <View style={styles.banner}>
        <View id="carouselContainer" style={styles.carouselContainer}>
          <Carousel
            width={screenWidth}
            height={carouselHeight}
            style={styles.carousel}
            data={movies}
            renderItem={({item}) => (
              <View style={styles.renderItem}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={[
                    styles.imagePoster,
                    {
                      width: screenWidth,
                      height: carouselHeight,
                    }, // <- dynamic overrides
                  ]}
                />
              </View>
            )}
          />
          <Pagination.Basic
            data={[1, 2, 3]}
            containerStyle={styles.paginationBasic}
            dotStyle={styles.paginationDot}
            progress={progress}
            onPress={() => {}}
          />
        </View>
        <View id="buttonPannel" style={styles.buttonPannel}>
          <View id="categories" style={styles.categories}>
            <Text>My List</Text>
            <Text>Discover</Text>
          </View>
          <View id="buttons" style={styles.buttons}>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.redButton}>
                <Text style={styles.buttonText}>Wishlist</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.blackButton}>
                <Text style={styles.buttonText}>Discover</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <CarouselHeader categoryName="Marvel studios" />
      <CarouselHeader categoryName="Best Movies" />
      <CarouselHeader categoryName="DC" />
      <CarouselHeader categoryName="Upcoming movies" />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
    // borderWidth: 3,
    // borderColor: 'yellow',
  },
  banner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    // borderWidth: 3,
    // borderColor: 'orange',
  },
  carouselContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    // borderWidth: 3,
    // borderColor: 'green',
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    // borderColor: 'red',
  },
  renderItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 8,
    // borderColor: 'blue',
  },
  imagePoster: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
  paginationBasic: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    // borderWidth: 3,
    // borderColor: 'green',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  buttonPannel: {
    display: 'flex',
    padding: 10,
    // borderWidth: 3,
    // borderColor: 'purple',
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    // borderWidth: 3,
    // borderColor: 'gold',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    // borderWidth: 3,
    // borderColor: 'limegreen',
  },
  redButton: {
    backgroundColor: '#0063e5', // Disney+ blue
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 10, // space between buttons
    shadowColor: '#0041a8',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
  },
  blackButton: {
    backgroundColor: '#031e3e', // dark navy blue
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#01172f',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
