import {View, Text, StyleSheet, Pressable, Image, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useThemedStyles} from '../hooks/useThemedStyles';
import {ThemeColors} from '../types/ThemeColors';
import useTheme from '../context/theme/useTheme';

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    textCentered: {
      textAlign: 'center',
    },
    textLarge: {
      fontSize: 24,
      color: colors.text,
    },
    textMediumBig: {
      fontSize: 22,
      color: colors.text,
      fontFamily: 'Gilroy-SemiBold',
    },
    textThemeButton: {
      fontSize: 16,
      color: colors.text,
      fontFamily: 'Gilroy-Regular',
    },
    textSmall: {
      fontSize: 16,
      fontFamily: 'Gilroy-Regular',
    },
    buttonText: {
      color: colors.text,
    },
    textExtraSmall: {
      fontSize: 13,
      fontFamily: 'Gilroy-Regular',
      color: colors.text,
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
      flexDirection: 'column',
      paddingVertical: 20,
      gap: 20,
      backgroundColor: colors.background,
    },
    userSectionContainer: {
      marginHorizontal: 20,
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
      flexDirection: 'column',
      gap: 5,
    },
    dataTextContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontFamily: 'Gilroy-Medium',
    },
    shareProfileButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: colors.background,
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
    },
    movieDataContainer: {
      flex: 3,
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
      flexDirection: 'column',
      padding: 20,
      gap: 20,
      borderRadius: 10,
    },
    darkModeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    darlkModeLeftSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    darkModeTextContainer: {
      flexDirection: 'column',
    },
    recentActivitySectionContainer: {
      marginHorizontal: 20,
      flexDirection: 'column',
      padding: 20,
      gap: 20,
      borderRadius: 10,
    },
    recentActivityList: {
      flexDirection: 'column',
      gap: 10,
    },
  });

const ProfileScreen = () => {
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);
  const {themeMode, setThemeMode} = useTheme();

  return (
    <View style={styles.profileScreen}>
      {/* User Info Section */}
      <View style={[styles.userSectionContainer, styles.borderGray]}>
        <Image
          style={styles.imageProfile}
          source={require('../../assets/images/mockProfile.jpg')}
        />
        <View style={styles.dataContainer}>
          <View style={styles.dataTextContainer}>
            <Text style={[styles.textMediumBig, styles.textBold]}>
              John Doe
            </Text>
            <Text style={[styles.textSmall, styles.grayText]}>
              Movie Enthusiast
            </Text>
          </View>
          <Pressable
            style={({pressed}) => [
              styles.shareProfileButton,
              pressed && styles.buttonPressed,
            ]}>
            <Icon name="share-social-outline" size={20} color="#F2C94C" />
            <Text style={[styles.textSmall, styles.buttonText]}>Share Profile</Text>
          </Pressable>
        </View>
      </View>

      {/* Movie Stats */}
      <View style={styles.movieDataSectionContainer}>
        {[
          {icon: 'star-outline', label: 'Movies Watched', count: 127},
          {icon: 'heart-outline', label: 'Movies Whishlist', count: 23},
          {icon: 'pricetag-outline', label: 'Collections', count: 8},
        ].map(({icon, label, count}, _index) => (
          <View
            key={_index}
            style={[styles.movieDataContainer, styles.borderGray]}>
            <Icon name={icon} size={20} color="#F2C94C" />
            <Text style={[styles.textLarge, styles.textBold]}>{count}</Text>
            <Text
              style={[
                styles.textCentered,
                styles.textExtraSmall,
                styles.grayText,
              ]}>
              {label}
            </Text>
          </View>
        ))}
      </View>

      {/* Settings */}
      <View style={[styles.settingsSectionContainer, styles.borderGray]}>
        <Text style={[styles.textLarge, styles.textBold]}>Settings</Text>
        <View style={styles.darkModeContainer}>
          <View style={styles.darlkModeLeftSection}>
            <Icon name="sunny-outline" size={20} color="#F2C94C" />
            <View style={styles.darkModeTextContainer}>
              <Text style={[styles.textThemeButton, styles.textBold]}>
                Dark Mode
              </Text>
              <Text style={styles.textThemeButton}>Toggle dark theme</Text>
            </View>
          </View>
          <Switch
            value={themeMode === 'dark'}
            onValueChange={val => {
              setThemeMode(val ? 'dark' : 'light');
            }}
            trackColor={{false: '#ccc', true: '#F2C94C'}}
            thumbColor={themeMode === 'dark' ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#ccc"
          />
        </View>
      </View>

      {/* Recent Activity */}
      <View style={[styles.recentActivitySectionContainer, styles.borderGray]}>
        <Text style={[styles.textLarge, styles.textBold]}>Recent Activity</Text>
        <View style={styles.recentActivityList}>
          <Text style={styles.textExtraSmall}>
            - Added "Dune: Part Two" to Watchlist
          </Text>
          <Text style={styles.textExtraSmall}>
            - Created "Sci-Fi" collection
          </Text>
          <Text style={styles.textExtraSmall}>- Watched "Oppenheimer"</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
