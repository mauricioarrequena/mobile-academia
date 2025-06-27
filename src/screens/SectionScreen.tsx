import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import useTMDB from '../hooks/useTMDB';
import {useRoute, RouteProp} from '@react-navigation/native';
import MovieCard from '../components/MovieCard';
import {useThemedStyles} from '../hooks/useThemedStyles';
import {ThemeColors} from '../types/ThemeColors';

type RootStackParamList = {
  Tabs: undefined;
  SectionScreen: {categoryName: string; endpoint: string; params: any};
};

const NUMBER_OF_COLUMNS = 3;

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    sectionScreen: {
      flex: 1,
      paddingTop: 60,
      paddingHorizontal: 16,
      backgroundColor: colors.background,
    },
    sectionTitle: {
      color: colors.text,
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
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);

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
