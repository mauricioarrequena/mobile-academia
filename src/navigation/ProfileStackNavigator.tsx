import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import {useThemedStyles} from '../hooks/useThemedStyles';
import {StyleSheet} from 'react-native';
import {ThemeColors} from '../types/ThemeColors';

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    header: {
      borderColor: colors.border,
      backgroundColor: colors.background,
    },
    headerTitle: {
      color: colors.text,
      fontFamily: 'Gilroy-SemiBold',
    },
  });

const StackNavigator = createNativeStackNavigator();
const ProfileStackNavigator = () => {
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: styles.header.backgroundColor,
        },
        headerTitleStyle: {
          color: styles.headerTitle.color,
          fontFamily: styles.headerTitle.fontFamily,
        },
      }}>
      <StackNavigator.Screen name="Profile" component={ProfileScreen} />
    </StackNavigator.Navigator>
  );
};

export default ProfileStackNavigator;
