import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme} from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {WishlistProvider} from './src/context/WishlistContext';
import {createTables} from './src/database/db';

const backgroundColorLigt = '#ffffff';
const backgroundColorDark = '#0a0a0b';

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
      style={{
        flex: 1,
        // padding: 10,
        // backgroundColor: 'lighblue',
        // backgroundColor: 'transparent', // Ensure the background is transparent
        backgroundColor:
          colorScheme === 'dark' ? backgroundColorDark : backgroundColorLigt,
      }}>
      <WishlistProvider>
        <GestureHandlerRootView>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          />
          <MainNavigator />
        </GestureHandlerRootView>
      </WishlistProvider>
    </SafeAreaProvider>
  );
}

export default App;
