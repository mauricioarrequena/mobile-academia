import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  useColorScheme,
  Modal,
} from 'react-native';
import {PopularMovie} from '../types/PopularMovie';
import {getPopularMovies} from '../utils/TMDBService';
import {TMDB_IMAGES_BASE_URL} from '@env';
import Carousel, {
  Pagination,
  ICarouselInstance,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const BANNER_HEIGHT = 495;
const DARK_GRADIENT_COLORS = [
  'rgba(0, 0, 0, 0)',
  'rgba(0, 0, 0, 0.2)',
  'rgba(0, 0, 0, 0.4)',
  'rgba(0, 0, 0, 0.7)',
  'black',
  'black',
];
const LIGHT_GRADIENT_COLORS = [
  'rgba(255, 255, 255, 0)',
  'rgba(255, 255, 255, 0.1)',
  'rgba(255, 255, 255, 0.3)',
  'rgba(255, 255, 255, 0.6)',
  '#fff',
  '#fff',
];
const GRADIENT_LOCATIONS = [0, 0.2, 0.4, 0.6, 0.8, 1];
const getStyles = (isDarkMode: boolean) => {
  return StyleSheet.create({
    homeBanner: {
      height: BANNER_HEIGHT,
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
      top: '70%',
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
      backgroundColor: '#333333',
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
      width: 8,
      height: 8,
      borderRadius: 10,
      backgroundColor: '#ccc',
    },
    activeDot: {
      width: 8,
      height: 8,
      borderRadius: 10,
      backgroundColor: 'yellow',
    },
    centeredView: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.725)',
    },
    themedModalView: {
      width: '80%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingVertical: 25,
      paddingHorizontal: 25,
      borderRadius: 20,
      backgroundColor: isDarkMode ? '#1E1E1E' : '#fff',
    },
    themedText: {
      color: isDarkMode ? '#fff' : 'black',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 10,
    },
    modalOverview: {
      fontSize: 16,
      marginBottom: 10,
    },
    modalRelseaseDate: {
      fontSize: 16,
      marginBottom: 20,
    },
    modalButton: {
      alignSelf: 'center',
    },
    themedButtonText: {
      color: isDarkMode ? '#000' : '#fff',
    },
  });
};

const HomeBanner = () => {
  const [bannerMovies, setBannerMovies] = useState<Array<PopularMovie>>([]);
  const [selectedMovie, setSelectedMovie] = useState<PopularMovie | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const carouselRef = useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  useEffect(() => {
    async function fetchPopularMovies() {
      const popularMovies = await getPopularMovies();
      setBannerMovies(popularMovies.slice(0, 5));
      setSelectedMovie(popularMovies[0]);
    }

    fetchPopularMovies();
  }, []);

  const handleOnSnapToItem = (index: number) => {
    setSelectedMovie(bannerMovies[index]);
  };

  const handleOnPressDetails = () => {
    setModalVisible(true);
  };

  const handleOnPressPagination = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        count: index - progress.value,
        animated: true,
      });
    }
  };

  const handleOnPressHideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.homeBanner}>
      <Carousel
        ref={carouselRef}
        style={styles.carousel}
        width={SCREEN_WIDTH}
        data={bannerMovies}
        onProgressChange={progress}
        onSnapToItem={index => handleOnSnapToItem(index)}
        renderItem={({item}) => (
          <Image
            key={item.id}
            style={styles.imagePoster}
            source={{uri: `${TMDB_IMAGES_BASE_URL}/w500${item.poster_path}`}}
          />
        )}
      />
      <LinearGradient
        style={styles.blackLinearGradient}
        colors={isDarkMode ? DARK_GRADIENT_COLORS : LIGHT_GRADIENT_COLORS}
        locations={GRADIENT_LOCATIONS}
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
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleOnPressDetails}>
              <Text style={[styles.buttonText, styles.themedButtonText]}>
                Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Pagination.Basic
          containerStyle={styles.paginator}
          dotStyle={styles.regularDot}
          activeDotStyle={styles.activeDot}
          data={bannerMovies}
          progress={progress}
          onPress={handleOnPressPagination}
        />
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={handleOnPressHideModal}>
        <View style={styles.centeredView}>
          <View style={styles.themedModalView}>
            <Text style={[styles.modalTitle, styles.themedText]}>
              {selectedMovie?.title}
            </Text>
            <Text style={[styles.modalOverview, styles.themedText]}>
              {selectedMovie?.overview}
            </Text>
            <Text style={[styles.modalRelseaseDate, styles.themedText]}>
              Release date: {selectedMovie?.release_date}
            </Text>
            <TouchableOpacity
              style={[styles.modalButton, styles.primaryButton]}
              onPress={handleOnPressHideModal}>
              <Text style={[styles.themedButtonText]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeBanner;
