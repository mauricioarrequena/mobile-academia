// App.tsx
import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// Importing the custom TabBar component
import TabBar from './src/components/TabBar';
// Importing your screen components
import Home from './src/screens/HomeScreen';
import Search from './src/screens/SearchScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.app}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
            screenOptions={{
              headerShown: false, // This disables the header on all tabs
            }}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={() => ({
                tabBarLabel: 'Home',
                // Custom value passed via route.params
                // Your TabBar component will read this from route.name or hardcoded mapping
              })}
            />
            <Tab.Screen
              name="Search"
              component={Search}
              options={() => ({
                tabBarLabel: 'Search',
              })}
            />
            <Tab.Screen
              name="Wishlist"
              component={WishlistScreen}
              options={() => ({
                tabBarLabel: 'Wishlist',
              })}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={() => ({
                tabBarLabel: 'Profile',
              })}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
