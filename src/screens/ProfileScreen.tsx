import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    textCentered: {
      textAlign: 'center',
    },
    textLarge: {
      fontSize: 24,
      // borderWidth: 1,
      // borderColor: 'red',
    },
    textMedium: {
      fontSize: 2,
    },
    textSmall: {
      fontSize: 16,
      // borderWidth: 1,
      // borderColor: 'blue',
    },
    textExtraSmall: {
      fontSize: 13,
    },
    textBold: {
      fontWeight: 'bold',
      // borderWidth: 1,
      // borderColor: 'orange',
    },
    grayText: {
      color: 'gray',
    },
    genericText: {
      borderWidth: 1,
      borderColor: 'black',
    },
    borderGray: {
      borderWidth: 1,
      borderColor: '#ccc',
    },
    profileScreen: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingVertical: 20,
      gap: 20,
      backgroundColor: isDarkMode ? '#121212' : '#fff',
      borderWidth: 3,
      borderColor: 'purple',
    },
    userSectionContainer: {
      marginHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      gap: 20,
      borderRadius: 10,
      // borderWidth: 2,
      // borderColor: 'green',
    },
    imageContainer: {
      // borderWidth: 2,
      // borderColor: 'cyan',
    },
    imageProfile: {
      width: 70,
      height: 70,
      borderRadius: 50,
    },
    dataContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      // borderWidth: 2,
      // borderColor: 'magenta',
    },
    dataTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      // borderWidth: 2,
      // borderColor: 'yellow',
    },
    shareProfileButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    buttonPressed: {
      opacity: 0.7,
      transform: [{scale: 0.98}],
    },
    movieDataSectionContainer: {
      marginHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
      // borderWidth: 2,
      // borderColor: 'brown',
    },
    movieDataContainer: {
      flex: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingVertical: 25,
      gap: 8,
      borderRadius: 10,
      // borderWidth: 2,
      // borderColor: 'pink',
    },
    movieDataText: {
      textAlign: 'center',
      borderWidth: 1,
      borderColor: 'black',
    },
    settingsSectionContainer: {
      marginHorizontal: 20,
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      gap: 20,

      borderWidth: 2,
      borderColor: 'teal',
    },
    darkModeContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: 'gray',
    },
    darlkModeLeftSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      // borderWidth: 2,
      // borderColor: 'gray',
    },
    darkModeTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      // borderWidth: 2,
      // borderColor: 'navy',
    },
    darkModeToggleContainer: {
      borderWidth: 2,
      borderColor: 'maroon',
    },
    recentActivitySectionContainer: {
      marginHorizontal: 20,
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      gap: 20,
      borderWidth: 2,
      borderColor: 'olive',
    },
    recentActivityList: {
      borderWidth: 2,
      borderColor: 'lime',
    },
  });

const ProfileScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.profileScreen}>
      <View style={[styles.userSectionContainer, styles.borderGray]}>
        <View testID="image container" style={styles.imageContainer}>
          <Image
            style={styles.imageProfile}
            source={require('../../assets/images/mockProfile.jpg')}
          />
        </View>
        <View testID="data contianer" style={styles.dataContainer}>
          <View testID="data text ontainer" style={styles.dataTextContainer}>
            <Text style={[styles.textMedium, styles.textBold]}>John Doe</Text>
            <Text style={[styles.textSmall, styles.grayText]}>
              Movie Enthusiast
            </Text>
          </View>
          <Pressable
            testID="button container"
            style={({pressed}) => [
              styles.shareProfileButton,
              pressed && styles.buttonPressed,
            ]}>
            <Icon name="share-social-outline" size={20} color="gray" />
            <Text style={styles.textSmall}>Share Profile</Text>
          </Pressable>
        </View>
      </View>

      <View style={[styles.movieDataSectionContainer]}>
        <View style={[styles.movieDataContainer, styles.borderGray]}>
          <Icon name="star-outline" size={20} color="gray" />
          <Text style={[styles.textLarge, styles.textBold]}>127</Text>
          <Text
            style={[
              styles.textCentered,
              styles.textExtraSmall,
              styles.grayText,
            ]}>
            Movies Watched
          </Text>
        </View>
        <View style={[styles.movieDataContainer, styles.borderGray]}>
          <Icon name="heart-outline" size={20} color="gray" />
          <Text style={[styles.textLarge, styles.textBold]}>23</Text>
          <Text
            style={[
              styles.textCentered,
              styles.textExtraSmall,
              styles.grayText,
            ]}>
            Movies Whishlist
          </Text>
        </View>
        <View style={[styles.movieDataContainer, styles.borderGray]}>
          <Icon name="pricetag-outline" size={20} color="gray" />
          <Text style={[styles.textLarge, styles.textBold]}>8</Text>
          <Text
            style={[
              styles.textCentered,
              styles.textExtraSmall,
              styles.grayText,
            ]}>
            Collections
          </Text>
        </View>
      </View>

      <View style={styles.settingsSectionContainer}>
        <Text style={[styles.textLarge, styles.textBold]}>Settings</Text>
        <View style={styles.darkModeContainer}>
          <View style={styles.darlkModeLeftSection}>
            <Icon name="sunny-outline" size={20} color="gray" />
            <View style={styles.darkModeTextContainer}>
              <Text style={[styles.textSmall, styles.textBold]}>Dark Mode</Text>
              <Text style={[styles.textSmall]}>Toggle dark theme</Text>
            </View>
          </View>
          <View style={styles.darkModeToggleContainer}>
            <Text style={styles.genericText}>toggle</Text>
          </View>
        </View>
      </View>

      <View style={styles.recentActivitySectionContainer}>
        <Text style={styles.genericText}>Recent Activity</Text>
        <View style={styles.recentActivityList}>
          <Text style={styles.genericText}>
            - Added "Dune: Part Two" to Watchlist
          </Text>
          <Text style={styles.genericText}>Craeted "Sci-Fi" collection</Text>
          <Text style={styles.genericText}>Watched "Openhaimer"</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
