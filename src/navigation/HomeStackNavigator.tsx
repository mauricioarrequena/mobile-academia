import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import MovieDetail from '../screens/MovieDetail';

const StackNavigator = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Overview'}}
      />
      <StackNavigator.Screen
        name="SectionScreen"
        component={SectionScreen}
        options={{title: 'Section'}}
      />
      <StackNavigator.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{title: 'Movie Detail'}}
      />
    </StackNavigator.Navigator>
  );
};

export default HomeStackNavigator;
