import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { PopularMovie } from '../types/PopularMovie';
import { getPopularMovies } from '../utils/TMDBService';
import { TMDB_IMAGES_BASE_URL } from '@env';
import Carousel, { Pagination, ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');
const bannerHeight = 495;
const BLACK_GRADIENT_COLORS = [
  'rgba(0, 0, 0, 0)',
  'rgba(0, 0, 0, 0.6)',
  'rgba(0, 0, 0, 0.85)',
  'black',
  'black',
];
const BLACK_GRADIENT_LOCATIONS = [0, 0.2, 0.4, 0.7, 1];
const styles = StyleSheet.create({
  homeBanner: {
    height: bannerHeight,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    // borderWidth: 5,
    // borderColor: 'green',
  },
  carousel: {
    // borderWidth: 3,
    // borderColor: 'red',
  },
  imagePoster: {
    resizeMode: 'cover',
    height: '100%',
    // borderWidth: 4,
    // borderColor: 'coral',
  },
  blackLinearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '60%',
    bottom: 0,
    pointerEvents: 'none',
  },
  floatingPannel: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
    // borderWidth: 4,
    // borderColor: 'orange',
  },
  controlsContainer: {
    display: 'flex',
    gap: 20,
    // borderWidth: 3,
    // borderColor: 'purple',
  },
  sectionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    // borderWidth: 3,
    // borderColor: 'green',
  },
  sectionText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ccc',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    // borderWidth: 3,
    // borderColor: 'limegreen',
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 35,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#7D8790',
  },
  primaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 35,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F2C94C',
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
  },
  paginator: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    // borderWidth: 3,
    // borderColor: 'blue',
  },
  regularDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
});
const getThemedStyles = (isDarkMode: boolean) => {
  return StyleSheet.create({
    primaryButtonText: {
      color: isDarkMode ? '#000' : '#fff',
    },
  });
};

const HomeBanner = () => {
  const colorScheme = useColorScheme();
  const [bannerMovies, setBannerMovies] = useState<Array<PopularMovie>>([]);
  const progress = useSharedValue(0);
  const carouselRef = useRef<ICarouselInstance>(null);
  const isDarkMode = colorScheme === 'dark';
  const themedStyles = getThemedStyles(isDarkMode);

  useEffect(() => {
    async function fetchPopularMovies() {
      const popularMovies = await getPopularMovies();
      setBannerMovies(popularMovies.slice(0, 5));
    }

    fetchPopularMovies();
  }, []);

  const onPressPagination = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        count: index - progress.value,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.homeBanner}>
      <Carousel
        ref={carouselRef}
        style={styles.carousel}
        width={screenWidth}
        data={bannerMovies}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <Image
            style={styles.imagePoster}
            source={{ uri: `${TMDB_IMAGES_BASE_URL}/w500${item.poster_path}` }}
          />
        )}
      />
      <LinearGradient
        style={styles.blackLinearGradient}
        colors={BLACK_GRADIENT_COLORS}
        locations={BLACK_GRADIENT_LOCATIONS}
      />
      <View style={styles.floatingPannel}>
        <View style={styles.controlsContainer}>
          <View style={styles.sectionsContainer}>
            <Text style={styles.sectionText}>My List</Text>
            <Text style={styles.sectionText}>Discover</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.buttonText}>+ Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={[styles.buttonText, themedStyles.primaryButtonText]}>Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Pagination.Basic
          containerStyle={styles.paginator}
          dotStyle={styles.regularDot}
          activeDotStyle={styles.activeDot}
          data={bannerMovies}
          progress={progress}
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
};
export default HomeBanner;
