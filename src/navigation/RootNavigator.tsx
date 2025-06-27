import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'; // ✅ move it here
import MainNavigator from './MainNavigator';
import MovieDetail from '../screens/MovieDetail';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Main" component={MainNavigator} />
        <RootStack.Screen name="MovieDetail" component={MovieDetail} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
