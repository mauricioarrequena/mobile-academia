import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';
import useTMDBById from '../hooks/useTMDBById';
import {TMDB_IMAGES_BASE_URL} from '@env';
import {useThemedStyles} from '../hooks/useThemedStyles';
import {ThemeColors} from '../types/ThemeColors';
import {Linking} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const MovieDetail = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'MovieDetail'>>();
  const {id} = route.params;
  const {movie, trailerUrl} = useTMDBById(id);
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);

  if (!movie) {
    return (
      <Text style={[styles.loadingText, styles.textColor]}>Loading...</Text>
    );
  }

  const handleWatchTrailer = () => {
    if (trailerUrl) {
      Linking.openURL(trailerUrl);
    } else {
      console.warn('Trailer not available.');
    }
  };
  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `${TMDB_IMAGES_BASE_URL}/w500${
              movie.backdrop_path || movie.poster_path
            }`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={[styles.title, styles.textColorWhite]}>
            {movie.title}
          </Text>
          <View style={styles.metaRow}>
            <Text style={[styles.meta, styles.textColorWhite]}>
              ⭐️ {movie.vote_average?.toFixed(1)}
            </Text>
            {movie.runtime && (
              <>
                <Text style={[styles.meta, styles.textColorWhite]}> • </Text>
                <Text style={[styles.meta, styles.textColorWhite]}>
                  {movie.runtime} min
                </Text>
              </>
            )}
            <Text style={[styles.meta, styles.textColorWhite]}> • </Text>
            <Text style={[styles.meta, styles.textColorWhite]}>
              {movie.release_date?.split('-')[0]}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={[styles.button]} onPress={handleWatchTrailer}>
          <Text style={[styles.buttonText]}>Watch Trailer</Text>
        </TouchableOpacity>

        <View style={[styles.overviewSection]}>
          <Text style={[styles.sectionTitle, styles.textColor]}>Overview</Text>
          <Text style={[styles.overviewText, styles.textColor]}>
            {movie.overview}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 24,
      backgroundColor: colors.background,
    },
    loadingText: {
      padding: 20,
    },
    imageContainer: {
      position: 'relative',
      height: screenHeight * 0.4,
      width: '100%',
    },
    image: {
      height: '100%',
      width: '100%',
    },
    overlay: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      right: 16,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Gilroy-Bold',
    },
    metaRow: {
      flexDirection: 'row',
      gap: 4,
      marginTop: 4,
      flexWrap: 'wrap',
    },
    meta: {
      fontSize: 14,
      fontFamily: 'Gilroy-Medium',
    },
    content: {
      paddingHorizontal: 16,
      paddingTop: 20,
      gap: 20,
    },
    button: {
      paddingVertical: 12,
      borderRadius: 24,
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
    buttonText: {
      fontSize: 16,
      fontFamily: 'Gilroy-SemiBold',
      color: colors.buttonText,
    },
    overviewSection: {
      padding: 16,
      borderRadius: 12,
      marginTop: 10,
      backgroundColor: colors.background,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      fontFamily: 'Gilroy-SemiBold',
      marginBottom: 8,
    },
    overviewText: {
      fontSize: 15,
      lineHeight: 22,
      fontFamily: 'Gilroy-Medium',
    },
    textColor: {
      color: colors.text,
    },
    textColorWhite: {
      color: 'white',
    },
  });

export default MovieDetail;
