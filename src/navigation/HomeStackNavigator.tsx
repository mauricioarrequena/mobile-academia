import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import {useThemedStyles} from '../hooks/useThemedStyles';
import {StyleSheet} from 'react-native';
import {ThemeColors} from '../types/ThemeColors';

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    screen: {
      backgroundColor: colors.background,
    },
  });

const StackNavigator = createNativeStackNavigator();
const HomeStackNavigator = () => {
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);

  return (
    <StackNavigator.Navigator
      screenOptions={{headerShown: false, contentStyle: styles.screen}}>
      <StackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Overview',
        }}
      />
      <StackNavigator.Screen
        name="SectionScreen"
        component={SectionScreen}
        options={{title: 'Section'}}
      />
    </StackNavigator.Navigator>
  );
};
export default HomeStackNavigator;
