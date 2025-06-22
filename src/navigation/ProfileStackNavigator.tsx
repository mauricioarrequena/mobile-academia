import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';

const StackNavigator = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Proflie" component={ProfileScreen} />
    </StackNavigator.Navigator>
  );
};

export default ProfileStackNavigator;
