import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  useColorScheme,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    textCentered: {
      textAlign: 'center',
    },
    textLarge: {
      fontSize: 24,
      color: isDarkMode ? 'white' : 'black'
    },
    textMediumBig: {
      fontSize: 22,
      color: isDarkMode ? 'white' : 'black',
      fontFamily: 'Gilroy-SemiBold',
    },
    textThemeButton: {
      fontSize: 16,
      color: isDarkMode ? 'white' : 'black',
      fontFamily: 'Gilroy-Regular',
    },
    textSmall: {
      fontSize: 16,
      fontFamily: 'Gilroy-Regular',
    },
    textExtraSmall: {
      fontSize: 13,
      fontFamily: 'Gilroy-Regular',
      color: isDarkMode ? 'white' : 'Black',
    },
    textBold: {
      fontFamily: 'Gilroy-Bold',
    },
    grayText: {
      color: 'gray',
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
      backgroundColor: isDarkMode ? 'black' : '#fff',
    },
    userSectionContainer: {
      marginHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      gap: 20,
      borderRadius: 10,
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
    },
    dataTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontFamily: 'Gilroy-Medium',
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
    },
    movieDataContainer: {
      flex: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingVertical: 25,
      gap: 8,
      borderRadius: 10,
    },
    movieDataText: {
      textAlign: 'center',
      borderWidth: 1,
      borderColor: 'black',
      fontFamily: 'Gilroy-SemiBold',
    },
    settingsSectionContainer: {
      marginHorizontal: 20,
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      gap: 20,
      borderRadius: 10,
    },
    darkModeContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    darlkModeLeftSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    darkModeTextContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    recentActivitySectionContainer: {
      marginHorizontal: 20,
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      gap: 20,
      borderRadius: 10,
    },
    recentActivityList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },
  });

const ProfileScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);
  const [mockToggled, setMockToggled] = useState(false);

  return (
    <View style={styles.profileScreen}>
      <View style={[styles.userSectionContainer, styles.borderGray]}>
        <View testID="image container">
          <Image
            style={styles.imageProfile}
            source={require('../../assets/images/mockProfile.jpg')}
          />
        </View>
        <View testID="data contianer" style={styles.dataContainer}>
          <View testID="data text ontainer" style={styles.dataTextContainer}>
            <Text style={[styles.textMediumBig, styles.textBold]}>
              John Doe
            </Text>
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
            <Icon name="share-social-outline" size={20} color="#F2C94C" />
            <Text style={styles.textSmall}>Share Profile</Text>
          </Pressable>
        </View>
      </View>

      <View style={[styles.movieDataSectionContainer]}>
        <View style={[styles.movieDataContainer, styles.borderGray]}>
          <Icon name="star-outline" size={20} color="#F2C94C" />
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
          <Icon name="heart-outline" size={20} color="#F2C94C" />
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
          <Icon name="pricetag-outline" size={20} color="#F2C94C" />
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

      <View style={[styles.settingsSectionContainer, styles.borderGray]}>
        <Text style={[styles.textLarge, styles.textBold]}>Settings</Text>
        <View style={styles.darkModeContainer}>
          <View style={styles.darlkModeLeftSection}>
            <Icon name="sunny-outline" size={20} color="#F2C94C" />
            <View style={styles.darkModeTextContainer}>
              <Text style={[styles.textThemeButton, styles.textBold]}>Dark Mode</Text>
              <Text style={[styles.textThemeButton]}>Toggle dark theme</Text>
            </View>
          </View>
          <View>
            <Switch
              value={mockToggled}
              onValueChange={() => {
                setMockToggled(!mockToggled);
              }}
              trackColor={{false: '#ccc', true: '#F2C94C'}}
              thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#ccc"
            />
          </View>
        </View>
      </View>

      <View style={[styles.recentActivitySectionContainer, styles.borderGray]}>
        <Text style={[styles.textLarge, styles.textBold]}>Recent Activity</Text>
        <View style={styles.recentActivityList}>
          <Text style={[styles.textExtraSmall]}>
            - Added "Dune: Part Two" to Watchlist
          </Text>
          <Text style={[styles.textExtraSmall]}>
            - Craeted "Sci-Fi" collection
          </Text>
          <Text style={[styles.textExtraSmall]}>- Watched "Openhaimer"</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
