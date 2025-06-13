import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getPopularMovies} from '../utils/TMDBService';
import {TMDB_IMAGES_BASE_URL} from '@env';
import Carousel, {Pagination} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';

const styles = StyleSheet.create({
  banner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    borderWidth: 3,
    borderColor: 'orange',
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
    gap: 10,
    // borderWidth: 3,
    // borderColor: 'purple',
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 60,
    // borderWidth: 3,
    // borderColor: 'gold',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    // borderWidth: 3,
    // borderColor: 'limegreen',
  },
  redButton: {
    backgroundColor: '#0063e5', // Disney+ blue
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
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

const HomeBanner = () => {
  const [bannerMovies, setBannerMovies] = useState([]);
  const progress = useSharedValue(0);
  const {width: screenWidth} = Dimensions.get('window');
  const carouselHeight = 550;

  useEffect(() => {
    async function fetchPopularMovies() {
      const movies = await getPopularMovies();
      setBannerMovies(movies);
    }

    fetchPopularMovies();
  }, []);

  return (
    <View style={styles.banner}>
      <View id="carouselContainer" style={styles.carouselContainer}>
        <Carousel width={screenWidth}
          height={carouselHeight}
          style={styles.carousel}
          data={bannerMovies}
          renderItem={({item}: {item: {poster_path: string}}) => (
            <View style={styles.renderItem}>
              <Image
                source={{
                  uri: `${TMDB_IMAGES_BASE_URL}/w500${item.poster_path}`,
                }}
                style={[
                  styles.imagePoster,
                  {
                    width: screenWidth,
                    height: carouselHeight,
                  },
                ]}
              />
            </View>
          )}
        />
        <Pagination.Basic data={[1, 2, 3]}
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
  );
};
export default HomeBanner;
