import {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useThemedStyles} from './src/hooks/useThemedStyles';
import {ThemeProvider} from './src/context/theme/ThemeProvider';
import {WishlistProvider} from './src/context/WishlistContext';
import RootNavigator from './src/navigation/RootNavigator';
import {createTables} from './src/database/db';

const stylesAppContent = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarBackground: {
    backgroundColor: 'transparent',
  },
});
const AppContent = () => {
  const {colors} = useThemedStyles();

  return (
    <View style={stylesAppContent.container}>
      <StatusBar
        translucent
        backgroundColor={stylesAppContent.statusBarBackground.backgroundColor}
        barStyle={colors.statusBar}
      />
      <RootNavigator />
    </View>
  );
};

const stylesApp = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

function App(): React.JSX.Element {
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
    <SafeAreaProvider style={stylesApp.safeArea}>
      <ThemeProvider>
        <WishlistProvider>
          <GestureHandlerRootView>
            <AppContent />
          </GestureHandlerRootView>
        </WishlistProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
