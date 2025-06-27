import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useWishlist} from '../context/WishlistContext';
import MovieCard from '../components/MovieCard';
import {ThemeColors} from '../types/ThemeColors';
import {useThemedStyles} from '../hooks/useThemedStyles';

const NUMBER_OF_COLUMNS = 3;

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    wishlistScreen: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 60,
      paddingHorizontal: 16,
    },
    title: {
      color: colors.text,
      fontSize: 24,
      fontFamily: 'Gilroy-SemiBold',
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
  const {wishlist} = useWishlist();
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);

  return (
    <View style={styles.wishlistScreen}>
      <Text style={styles.title}>Wishlist</Text>
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
