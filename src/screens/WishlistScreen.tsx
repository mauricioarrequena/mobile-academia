import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useWishlist} from '../context/WishlistContext';

const styles = StyleSheet.create({
  whishlistScreen: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
  },
  wishlistScreenBody: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
  wishlistScreenBodyEmpty: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'purple',
  },
  enptyContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    color: 'black',
  },
  wishlistScreenBodyWithItems: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: 'blue',
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  cardContainerImage: {},
  cardContainerInformation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardContainerControls: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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

const WishlistScreen = () => {
  const {wishlist, removeFromWishlist} = useWishlist();
  const isEmpty = wishlist.length === 0;

  return (
    <View style={styles.whishlistScreen}>
      <View style={styles.wishlistScreenBody}>
        {isEmpty ? (
          <View style={styles.wishlistScreenBodyEmpty}>
            <View style={styles.enptyContentContainer}>
              <Text style={[styles.textLarge, styles.textBold]}>
                Your Wishlist is Empty
              </Text>
              <Icon name="heart-outline" size={50} color="gray" />
            </View>
          </View>
        ) : (
          <View style={styles.wishlistScreenBodyWithItems}>
            <Text style={[styles.textLarge, styles.textBold]}>
              Your Wishlist
            </Text>
            {wishlist.map(movie => (
              <View key={movie.id} style={styles.cardContainer}>
                <View style={styles.cardContainerImage}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
                    }}
                    style={{width: 100, height: 150, borderRadius: 8}}
                  />
                </View>
                <View style={styles.cardContainerInformation}>
                  <Text style={styles.textSmall}>
                    {movie.title || movie.name}
                  </Text>
                </View>
                <View style={styles.cardContainerControls}>
                  <TouchableOpacity
                    onPress={() => removeFromWishlist(movie.id)}>
                    <Icon name="trash" size={24} color="#4F8EF7" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default WishlistScreen;
