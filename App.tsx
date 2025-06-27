import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {WishlistProvider} from './src/context/WishlistContext';
import {createTables} from './src/database/db';
import {ThemeProvider} from './src/context/theme/ThemeProvider';

const backgroundColorLigt = '#ffffff';
const backgroundColorDark = '#0a0a0b';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();

  useEffect(() => {
    const setupDb = async () => {
      try {
        await createTables();
      } catch (error) {
        console.error('Error setting up database:', error);
      }
    };

    setupDb();
  }, []);

  return (
    <SafeAreaProvider
      style={styles.safeArea}>
      <ThemeProvider>
        <WishlistProvider>
          <GestureHandlerRootView>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle={
                colorScheme === 'dark' ? 'light-content' : 'dark-content'
              }
            />
            <MainNavigator />
          </GestureHandlerRootView>
        </WishlistProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
