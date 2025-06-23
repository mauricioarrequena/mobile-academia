import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import useTMDB from '../hooks/useTMDB';
import {TMDB_IMAGES_BASE_URL} from '@env';
import {useRoute, RouteProp} from '@react-navigation/native';
import {PopularMovie} from '../types/PopularMovie';

type RootStackParamList = {
  Tabs: undefined;
  SectionScreen: {categoryName: string; endpoint: string; params: any};
};

const NUMBER_OF_COLUMNS = 2;
const SPACE = 10;
const CARD_WIDTH =
  Dimensions.get('window').width / NUMBER_OF_COLUMNS - SPACE * 2;

const styles = StyleSheet.create({
  sectionScreen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    rowGap: 10,
    borderWidth: 2,
    borderColor: 'yellow',
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
    rowGap: SPACE * 2,
    paddingBottom: 30,
    borderWidth: 2,
    borderColor: 'red',
  },
  card: {
    marginRight: SPACE / 1.5,
    width: CARD_WIDTH,
    height: 370,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#E0E0E0', // Material light outline
  },
  cardText: {
    fontSize: 16,
    // borderWidth: 2,
    // borderColor: 'orange',
  },
  movieItem: {
    width: 100,
    alignItems: 'center',
    gap: 8,
    // borderWidth: 2,
    // borderColor: 'brown',
  },
  image: {
    flexBasis: '90%',
    width: '100%',
    overflow: 'hidden',
    // borderWidth: 2,
    // borderColor: 'pink',
  },
  textContainer: {
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
    // padding: 4,
    color: 'black',
    // borderWidth: 2,
    // borderColor: 'teal',
  },
});

export default function SectionScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'SectionScreen'>>();
  const {categoryName, endpoint, params} = route.params ?? {};
  const {movies} = useTMDB(endpoint, params);

  const renderItem = ({item}: {item: PopularMovie}) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: `${TMDB_IMAGES_BASE_URL}/w185${item.poster_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={1}>
          {item.title ? item.title : item.name}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.sectionScreen}>
      <Text style={styles.sectionScreenHeader}>{categoryName}</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={NUMBER_OF_COLUMNS}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}
