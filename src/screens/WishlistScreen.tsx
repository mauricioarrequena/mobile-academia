import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useWishlist} from '../context/WishlistContext';
import AddCollection from '../components/AddCollection';

const WishlistScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  const {wishlist, removeFromWishlist} = useWishlist();
  const isEmpty = wishlist.length === 0;
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnCancel = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.whishlistScreen}>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={({pressed}) => [
          styles.createButton,
          pressed && styles.createButtonPressed,
        ]}>
        <Text style={styles.createButtonText}>Create Collection</Text>
      </Pressable>

      <View style={styles.wishlistScreenBody}>
        {isEmpty ? (
          <View style={styles.wishlistScreenBodyEmpty}>
            <View style={styles.enptyContentContainer}>
              <Text style={[styles.textLarge, styles.textBold]}>
                Your Wishlist is Empty
              </Text>
              <Icon
                name="heart-outline"
                size={50}
                color={isDarkMode ? '#888' : 'gray'}
              />
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
                    style={styles.movieImage}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <AddCollection onCancel={handleOnCancel} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WishlistScreen;

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    whishlistScreen: {
      flex: 1,
      flexDirection: 'column',
      padding: 16,
      backgroundColor: isDarkMode ? '#0a0a0b' : '#ffffff',
    },
    createButton: {
      marginTop: 80,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#6200ee',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    createButtonPressed: {
      backgroundColor: isDarkMode ? '#352b4d' : '#eaddff',
    },
    createButtonText: {
      color: '#6200ee',
      fontWeight: '500',
    },
    wishlistScreenBody: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wishlistScreenBodyEmpty: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    enptyContentContainer: {
      alignItems: 'center',
    },
    wishlistScreenBodyWithItems: {
      flex: 1,
      flexDirection: 'column',
      gap: 16,
    },
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      marginBottom: 12,
    },
    cardContainerImage: {},
    cardContainerInformation: {
      flex: 1,
      flexDirection: 'column',
    },
    cardContainerControls: {
      justifyContent: 'flex-start',
    },
    movieImage: {
      width: 100,
      height: 150,
      borderRadius: 8,
    },
    textLarge: {
      fontSize: 20,
      color: isDarkMode ? '#ffffff' : '#000000',
    },
    textSmall: {
      fontSize: 16,
      color: isDarkMode ? '#cccccc' : '#333333',
    },
    textBold: {
      fontWeight: 'bold',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)',
    },
    modalBox: {
      width: '100%',
      backgroundColor: isDarkMode ? '#1c1c1e' : '#ffffff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
  });
