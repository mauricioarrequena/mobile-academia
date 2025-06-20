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

type RootStackParamList = {
  Tabs: undefined;
  SectionScreen: {categoryName: string; endpoint: string; params: any};
};

const data = Array.from({length: 20}, (_, i) => `Card ${i + 1}`);
const NUMBER_OF_COLUMNS = 2;
const SPACE = 10;
const CARD_WIDTH =
  Dimensions.get('window').width / NUMBER_OF_COLUMNS - SPACE * 2;

const styles = StyleSheet.create({
  sectionScreen: {
    flex: 1,
    paddingTop: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10,
    borderWidth: 3,
    borderColor: 'yellow',
  },
  sectionScreenHeader: {
    alignSelf: 'flex-start',
    marginLeft: SPACE,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'green ',
  },
  container: {
    paddingLeft: SPACE,
    borderWidth: 1,
    borderColor: 'red',
    rowGap: SPACE,
  },
  card: {
    width: CARD_WIDTH,
    marginRight: SPACE * 2,
    height: 370,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    backgroundColor: '#eee',
    borderColor: 'backgroundColor',
    borderWidth: 1,
  },
  cardText: {
    fontSize: 16,
  },
  movieItem: {
    width: 100,
    alignItems: 'center',
    gap: 8,
    // borderWidth: 2,
    // borderColor: 'green',
  },
  image: {
    flexBasis: '90%',
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    // borderWidth: 3,
    // borderColor: 'yellow',
  },
  textContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'blue',
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
});

export default function SectionScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'SectionScreen'>>();
  const {categoryName, endpoint, params} = route.params;
  const {movies} = useTMDB(endpoint, params);

  const renderItem = ({item}: {item: any}) => (
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
        contentContainerStyle={styles.container}
      />
    </View>
  );
}
