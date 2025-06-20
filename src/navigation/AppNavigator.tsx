import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from '../components/TabBar';
import HomeScreen from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import WishlistScreen from '../screens/WishlistScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SectionScreen from '../screens/SectionScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function renderTabBar(props: BottomTabBarProps) {
  return <TabBar {...props} />;
}
const Tabs = () => {
  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{tabBarLabel: 'Search'}}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{tabBarLabel: 'Wishlist'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="SectionScreen" component={SectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
