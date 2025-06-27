import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TabBarFooter from '../components/TabBarFooter';
import HomeStackNavigator from './HomeStackNavigator';
import SearchScreen from '../screens/SearchScreen';
import WishlistScreen from '../screens/WishlistScreen';
import ProfileStackNavigator from './ProfileStackNavigator';

const TabNavigator = createBottomTabNavigator();

const renderTabBarFooter = (props: BottomTabBarProps) => {
  return (
    <TabBarFooter
      descriptors={props.descriptors}
      state={props.state}
      navigation={props.navigation}
      insets={props.insets}
    />
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        tabBar={renderTabBarFooter}
        screenOptions={{headerShown: false}}>
        <TabNavigator.Screen
          name="HomeTab"
          component={HomeStackNavigator}
          options={{
            title: 'Home',
          }}
        />
        <TabNavigator.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{title: 'Search'}}
        />
        <TabNavigator.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{title: 'Wishlist'}}
        />
        <TabNavigator.Screen
          name="ProfileTab"
          component={ProfileStackNavigator}
          options={{title: 'Profile',}}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
