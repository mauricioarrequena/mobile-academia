import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';
import useTMDBById from '../hooks/useTMDBById';
import {TMDB_IMAGES_BASE_URL} from '@env';

const screenHeight = Dimensions.get('window').height;

const MovieDetail = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'MovieDetail'>>();
  const {id} = route.params;
  const {movie} = useTMDBById(id);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const backgroundColor = isDark ? 'black' : '#fff';
  const textColor = isDark ? '#fff' : '#333333';
  const primaryColor = '#ebca62';

  if (!movie)
    return <Text style={{color: textColor, padding: 20}}>Loading...</Text>;

  return (
    <ScrollView contentContainerStyle={[styles.container, {backgroundColor}]}>
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
          <Text style={[styles.title, {color: '#fff'}]}>{movie.title}</Text>
          <View style={styles.metaRow}>
            <Text style={[styles.meta, {color: '#fff'}]}>
              ⭐️ {movie.vote_average?.toFixed(1)}
            </Text>
            {movie.runtime && (
              <>
                <Text style={[styles.meta, {color: '#fff'}]}> • </Text>
                <Text style={[styles.meta, {color: '#fff'}]}>
                  {movie.runtime} min
                </Text>
              </>
            )}
            <Text style={[styles.meta, {color: '#fff'}]}> • </Text>
            <Text style={[styles.meta, {color: '#fff'}]}>
              {movie.release_date?.split('-')[0]}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: primaryColor}]}>
          <Text style={[styles.buttonText, {color: isDark ? '#000' : '#fff'}]}>
            Watch Trailer
          </Text>
        </TouchableOpacity>

        <View
          style={[
            styles.overviewSection,
            {backgroundColor: isDark ? '#1e1e1e' : '#f9f9f9'},
          ]}>
          <Text style={[styles.sectionTitle, {color: textColor}]}>
            Overview
          </Text>
          <Text style={[styles.overviewText, {color: textColor}]}>
            {movie.overview}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 24,
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
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
  },
  overviewSection: {
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
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
});

export default MovieDetail;
