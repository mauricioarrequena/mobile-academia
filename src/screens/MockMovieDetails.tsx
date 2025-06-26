import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  useColorScheme,
  Pressable,
  Button,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import AddMovieToCollection from '../components/AddMovieToCollection';

const getStyles = (isDarkMode: Boolean) =>
  StyleSheet.create({
    container: {
      padding: 16,
    },
    selectedContainer: {
      marginTop: 80,
      padding: 16,
      borderBottomWidth: 1,
      borderColor: '#999',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    selectedInfo: {
      marginTop: 4,
    },
    selectedTitle: {
      fontSize: 16,
      fontWeight: '600',
    },
    selectedDate: {
      fontSize: 14,
      marginTop: 2,
    },
    card: {
      flexDirection: 'row',
      marginBottom: 16,
      borderRadius: 8,
      overflow: 'hidden',
      elevation: 2,
    },
    poster: {
      width: 80,
      height: 120,
      borderRadius: 4,
    },
    info: {
      flex: 1,
      marginLeft: 12,
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: '700',
    },
    subtitle: {
      fontSize: 14,
      marginTop: 4,
    },

    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)',
    },
    modalBox: {
      width: '100%',
      backgroundColor: isDarkMode ? '#1c1c1e' : '#ffffff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
  });

export interface MovieResult {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  popularity: number;
  original_language: string;
  original_title: string;
  adult: boolean;
  video: boolean;
}

export const sampleMovies: MovieResult[] = [
  {
    id: 557,
    title: 'Spider-Man',
    release_date: '2002-05-01',
    overview: 'After being bitten by a genetically altered spider at Oscorp...',
    poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
    backdrop_path: '/2PDTWfuBWQKVC7aPAqJK5UCpz08.jpg',
    vote_average: 7.312,
    vote_count: 19664,
    genre_ids: [28, 878],
    popularity: 19.2824,
    original_language: 'en',
    original_title: 'Spider-Man',
    adult: false,
    video: false,
  },
  {
    id: 315635,
    title: 'Spider-Man: Homecoming',
    release_date: '2017-07-05',
    overview: 'Following the events of Captain America: Civil War...',
    poster_path: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
    backdrop_path: '/tPpYGm2mVecue7Bk3gNVoSPA5qn.jpg',
    vote_average: 7.33,
    vote_count: 22269,
    genre_ids: [28, 12, 878, 18],
    popularity: 21.1327,
    original_language: 'en',
    original_title: 'Spider-Man: Homecoming',
    adult: false,
    video: false,
  },
  {
    id: 634649,
    title: 'Spider-Man: No Way Home',
    release_date: '2021-12-15',
    overview:
      'Peter Parker is unmasked and no longer able to separate his normal life...',
    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    backdrop_path: '/zD5v1E4joAzFvmAEytt7fM3ivyT.jpg',
    vote_average: 7.944,
    vote_count: 20845,
    genre_ids: [28, 12, 878],
    popularity: 33.5349,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    adult: false,
    video: false,
  },
  {
    id: 324857,
    title: 'Spider-Man: Into the Spider-Verse',
    release_date: '2018-12-06',
    overview:
      'Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider...',
    poster_path: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    backdrop_path: '/8mnXR9rey5uQ08rZAvzojKWbDQS.jpg',
    vote_average: 8.398,
    vote_count: 16217,
    genre_ids: [16, 28, 12, 878],
    popularity: 17.0449,
    original_language: 'en',
    original_title: 'Spider-Man: Into the Spider-Verse',
    adult: false,
    video: false,
  },
  {
    id: 569094,
    title: 'Spider-Man: Across the Spider-Verse',
    release_date: '2023-05-31',
    overview:
      'After reuniting with Gwen Stacy, Miles Morales is catapulted across the Multiverse...',
    poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    backdrop_path: '/kVd3a9YeLGkoeR50jGEXM6EqseS.jpg',
    vote_average: 8.346,
    vote_count: 7653,
    genre_ids: [16, 28, 12, 878],
    popularity: 24.5592,
    original_language: 'en',
    original_title: 'Spider-Man: Across the Spider-Verse',
    adult: false,
    video: false,
  },
];

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

const MockMovieDetails = () => {
  const theme = useColorScheme();
  const [selectedMovie, setSelectedMovie] = useState<MovieResult | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  const handleOnPressAdd = () => {
    setIsModalVisible(prev => !prev);
  };

  const handleOnCancel = () => {
    setIsModalVisible(false);
  };

  const handleOnSucess = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.selectedContainer,
          {backgroundColor: theme === 'dark' ? '#222' : '#eee'},
        ]}>
        <Text style={styles.sectionTitle}>🎬 Selected Movie</Text>
        {selectedMovie ? (
          <View style={styles.selectedInfo}>
            <Text
              style={[
                styles.selectedTitle,
                {color: theme === 'dark' ? '#fff' : '#000'},
              ]}>
              {selectedMovie.title}
            </Text>
            <Text
              style={[
                styles.selectedDate,
                {color: theme === 'dark' ? '#ccc' : '#444'},
              ]}>
              {selectedMovie.release_date}
            </Text>
          </View>
        ) : (
          <Text style={{color: theme === 'dark' ? '#aaa' : '#666'}}>
            No movie selected
          </Text>
        )}
      </View>

      <View style={{marginTop: 10}}>
        <Button
          title={isModalVisible ? 'Hide Modal' : 'Show Modal'}
          onPress={handleOnPressAdd}
        />
      </View>

      <FlatList
        data={sampleMovies}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <Pressable
            onPress={() => setSelectedMovie(item)}
            style={({pressed}) => [
              styles.card,
              {
                backgroundColor:
                  theme === 'dark'
                    ? pressed
                      ? '#333'
                      : '#111'
                    : pressed
                    ? '#ddd'
                    : '#fff',
              },
            ]}>
            {item.poster_path && (
              <Image
                source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
                style={styles.poster}
                resizeMode="cover"
              />
            )}
            <View style={styles.info}>
              <Text
                style={[
                  styles.title,
                  {color: theme === 'dark' ? '#fff' : '#000'},
                ]}>
                {item.title}
              </Text>
              <Text
                style={[
                  styles.subtitle,
                  {color: theme === 'dark' ? '#ccc' : '#444'},
                ]}>
                {item.release_date}
              </Text>
            </View>
          </Pressable>
        )}
      />

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <AddMovieToCollection
              onCancel={handleOnCancel}
              onSucress={handleOnSucess}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MockMovieDetails;
