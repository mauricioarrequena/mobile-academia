import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import useTMDB from '../hooks/useTMDB';
import {TMDB_IMAGES_BASE_URL} from '@env';
import Carousel, {
  Pagination,
  ICarouselInstance,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Movie} from '../types/Movie';
import {useNavigation} from '@react-navigation/native';
import {MainTabParamList} from '../navigation/types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useThemedStyles} from '../hooks/useThemedStyles';
import { ThemeColors } from '../types/ThemeColors';
import useTheme from '../context/theme/useTheme';

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
const getStyles = (colors: ThemeColors) => {
  return StyleSheet.create({
    homeBanner: {
      height: BANNER_HEIGHT,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    imagePoster: {
      resizeMode: 'cover',
      height: '100%',
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
    },
    controlsContainer: {
      display: 'flex',
      gap: 20,
    },
    sectionsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 40,
    },
    sectionText: {
      fontSize: 16,
      fontWeight: '700',
      fontFamily: 'Gilroy-Medium',
      color: '#ccc',
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 20,
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
      fontWeight: '500',
      fontFamily: 'Gilroy-SemiBold',
      color: '#fff',
    },
    paginator: {
      display: 'flex',
      flexDirection: 'row',
      gap: 12,
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
      backgroundColor: '#F2C94C',
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
      backgroundColor: colors.background,
    },
    themedText: {
      color: colors.text,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: '700',
      fontFamily: 'Gilroy-SemiBold',
      marginBottom: 10,
    },
    modalOverview: {
      fontSize: 16,
      marginBottom: 10,
      fontFamily: 'Gilroy-Regular',
    },
    modalRelseaseDate: {
      fontSize: 16,
      marginBottom: 20,
      fontFamily: 'Gilroy-Regular',
    },
    modalButton: {
      alignSelf: 'center',
      fontFamily: 'Gilroy-SemiBold',
    },
    themedButtonText: {
      color: colors.buttonText,
    },
  });
};

const HomeBanner = () => {
  const [bannerMovies, setBannerMovies] = useState<Array<Movie>>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const carouselRef = useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);
  const {movies} = useTMDB('movie/popular', {});
  const {currentTheme} = useTheme();
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);

  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();

  useEffect(() => {
    setBannerMovies(movies.slice(0, 5));
    setSelectedMovie(movies[0]);
  }, [movies]);

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

  const handleMyList = useCallback(() => {
    navigation.navigate('Wishlist');
  }, []);

  const handleDiscover = useCallback(() => {
    navigation.navigate('SearchScreen');
  }, []);

  const handleOnPressHideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.homeBanner}>
      <Carousel
        ref={carouselRef}
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
        colors={currentTheme === 'dark' ? DARK_GRADIENT_COLORS : LIGHT_GRADIENT_COLORS} 
        locations={GRADIENT_LOCATIONS}
      />
      <View style={styles.floatingPannel}>
        <View style={styles.controlsContainer}>
          <View style={styles.sectionsContainer}>
            <TouchableOpacity onPress={handleMyList}>
              <Text style={styles.sectionText}>My List</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDiscover}>
              <Text style={styles.sectionText}>Discover</Text>
            </TouchableOpacity>
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
