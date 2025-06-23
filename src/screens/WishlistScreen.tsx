import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  const mockEmpty = false;

  return (
    <View style={styles.whishlistScreen}>
      <View style={styles.wishlistScreenBody}>
        {mockEmpty ? (
          <View style={styles.wishlistScreenBodyEmpty}>
            <Text style={[styles.textLarge, styles.textBold]}>
              Your Wishlist is Empty
            </Text>
          </View>
        ) : (
          <View style={styles.wishlistScreenBodyWithItems}>
            <Text style={[styles.textLarge, styles.textBold]}>
              Your Wishlist is full
            </Text>
            <Text style={[styles.textLarge, styles.textBold]}>
              Your Wishlist is full
            </Text>
            <View testID="cardContainer" style={styles.cardContainer}>
              <View style={styles.cardContainerImage}>
                <Text>image</Text>
              </View>
              <View style={styles.cardContainerInformation}>
                <Text style={styles.textSmall}>cardInformation</Text>
                <Text style={styles.textSmall}>spiderman no way home</Text>
                <Text style={styles.textSmall}>2021 . action</Text>
                <Text style={styles.textSmall}>⭐ 8.2</Text>
                <Text style={styles.textSmall}>added three days ago</Text>
              </View>
              <View style={styles.cardContainerControls}>
                <Text style={styles.textSmall}>Wach</Text>
                <Text style={styles.textSmall}>Delete</Text>
                <Icon name="trash" size={30} color="#4F8EF7" />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default WishlistScreen;
