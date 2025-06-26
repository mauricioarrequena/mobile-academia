import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  useColorScheme,
} from 'react-native';
import useTMDB from '../hooks/useTMDB';
import {TMDB_IMAGES_BASE_URL} from '@env';
import {useRoute, RouteProp} from '@react-navigation/native';
import { Movie } from '../types/Movie';

type RootStackParamList = {
  Tabs: undefined;
  SectionScreen: {categoryName: string; endpoint: string; params: any};
};

const NUMBER_OF_COLUMNS = 2;
const SPACE = 10;
const CARD_WIDTH =
  Dimensions.get('window').width / NUMBER_OF_COLUMNS - SPACE * 2;

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    sectionScreen: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 20,
      rowGap: 10,
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
      // borderWidth: 2,
      // borderColor: 'yellow',
    },
    sectionScreenHeader: {
      alignSelf: 'flex-start',
      marginLeft: SPACE,
      display: 'flex',
      flexDirection: 'row',
      // borderWidth: 2,
      // borderColor: 'green',
    },
    listContainer: {
      rowGap: 20,
      paddingBottom: 30,
      // borderWidth: 2,
      // borderColor: 'red',
    },
    card: {
      height: 370,
      width: CARD_WIDTH,
      marginRight: SPACE / 1.5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: isDarkMode ? '#1E2A38' : '#fff',
      borderRadius: 10,
      borderWidth: 3,
      borderColor: isDarkMode ? '#2E3C4D' : '#E0E0E0',
    },
    image: {
      flexBasis: '90%',
      width: '100%',
      overflow: 'hidden',
      // borderWidth: 2,
      // borderColor: 'pink',
    },
    contentContainer: {
      flex: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 2,
      // borderColor: 'blue',
    },
    text: {
      textAlign: 'center',
      color: isDarkMode ? '#E0E0E0' : '#212121',
    },
    textLarge: {
      fontSize: 20,
    },
    textSmall: {
      fontSize: 16,
    },
    textBold: {
      fontWeight: 'bold',
    },
  });

export default function SectionScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'SectionScreen'>>();
  const {categoryName, endpoint, params} = route.params ?? {};
  const {movies} = useTMDB(endpoint, params);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  const renderItem = ({item}: {item: Movie}) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: `${TMDB_IMAGES_BASE_URL}/w185${item.poster_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text
          style={[styles.text, styles.textBold, styles.textSmall]}
          numberOfLines={1}>
          {item.title ? item.title : item.name}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.sectionScreen}>
      <Text style={styles.sectionScreenHeader}>{categoryName}</Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={NUMBER_OF_COLUMNS}
      />
    </View>
  );
}
