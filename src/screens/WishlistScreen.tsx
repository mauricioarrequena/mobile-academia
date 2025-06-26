import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ListRenderItem,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useWishlist} from '../context/WishlistContext';
import RemoveToWishList from '../components/RemoveToWishlist';
import MovieCard from '../components/MovieCard';
import {Movie} from '../types/Movie';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const itemMargin = 16;
const itemWidth = (screenWidth - itemMargin * (numColumns + 1)) / numColumns;

const styles = StyleSheet.create({
  wishlistScreen: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    marginTop: 16,
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
  movieCard: {
    position: 'relative',
    width: itemWidth,
    margin: itemMargin / 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  movieImage: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 8,
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
  const {wishlist, removeFromWishlist} = useWishlist();

  const renderItem: ListRenderItem<Movie> = ({item}) => (
    <MovieCard
      movie={item}
      showTitle={false}
      isWishListScreen={true}
      containerStyle={{
        position: 'relative',
        width: itemWidth,
        margin: itemMargin / 2,
        borderRadius: 8,
        overflow: 'hidden',
      }}
      imageStyle={{
        width: '100%',
        aspectRatio: 2 / 3,
        borderRadius: 8,
      }}
    />
  );

  return (
    <View style={styles.wishlistScreen}>
      {wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your Wishlist is Empty</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default WishlistScreen;
