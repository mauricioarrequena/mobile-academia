import React from 'react';
import {View, Text, FlatList, StyleSheet, useColorScheme} from 'react-native';
import useTMDB from '../hooks/useTMDB';
import {useRoute, RouteProp} from '@react-navigation/native';
import MovieCard from '../components/MovieCard';

type RootStackParamList = {
  Tabs: undefined;
  SectionScreen: {categoryName: string; endpoint: string; params: any};
};

const NUMBER_OF_COLUMNS = 3;

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    sectionScreen: {
      flex: 1,
      paddingTop: 60,
      paddingHorizontal: 16,
      backgroundColor: isDarkMode ? 'black' : '#FFFFFF',
    },
    sectionTitle: {
      color: isDarkMode ? '#FFFFFF' : 'black',
      fontSize: 24,
      fontFamily: 'Gilroy-SemiBold',
      marginBottom: 20,
    },
    columnWrapperStyle: {
      justifyContent: 'space-between',
      marginBottom: 16,
    },
  });

export default function SectionScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'SectionScreen'>>();
  const {categoryName, endpoint, params} = route.params ?? {};
  const {movies} = useTMDB(endpoint, params);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.sectionScreen}>
      <Text style={styles.sectionTitle}>{categoryName}</Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        numColumns={NUMBER_OF_COLUMNS}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={({item}) => (
          <MovieCard movie={item} showTitle={true} isWishListScreen={false} />
        )}
      />
    </View>
  );
}
