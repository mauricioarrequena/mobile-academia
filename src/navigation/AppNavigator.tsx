import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from '../components/TabBar';
import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import WishlistScreen from '../screens/WishlistScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default function AppNavigator() {
  const Tab = createBottomTabNavigator();

  function renderTabBar(props: BottomTabBarProps) {
    return <TabBar {...props} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
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
    </NavigationContainer>
  );
}
