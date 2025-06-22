import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';

const StackNavigator = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <StackNavigator.Navigator>
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
    </StackNavigator.Navigator>
  );
};

export default HomeStackNavigator;
