import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions, useColorScheme} from 'react-native';
import {useWishlist} from '../context/WishlistContext';
import MovieCard from '../components/MovieCard';

const NUMBER_OF_COLUMNS = 3;

const getStyles = (isDarkMode: boolean) => StyleSheet.create({
  wishlistScreen: {
    flex: 1,
    backgroundColor: isDarkMode ? 'black' : '#FFFFFF',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    color: isDarkMode ? '#FFFFFF' : 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  trashIconWrapper: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(128,128,128,0.6)',
    padding: 4,
    borderRadius: 12,
  },
});

const WishlistScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);
  const {wishlist} = useWishlist();

  return (
    <View style={styles.wishlistScreen}>
      <Text style={styles.title}>My Wishlist</Text>
      {wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your Wishlist is Empty</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={item => item.id.toString()}
          numColumns={NUMBER_OF_COLUMNS}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({item}) => (
            <MovieCard movie={item} showTitle={false} isWishListScreen={true} />
          )}
        />
      )}
    </View>
  );
};

export default WishlistScreen;
