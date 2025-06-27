import {useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {STORAGE_KEY, ThemeMode} from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContext} from './ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const systemColorScheme = Appearance.getColorScheme() ?? 'light';
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(
    systemColorScheme === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(savedMode => {
      if (
        savedMode === 'light' ||
        savedMode === 'dark' ||
        savedMode === 'system'
      ) {
        setThemeMode(savedMode);
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, themeMode);
  }, [themeMode]);

  useEffect(() => {
    if (themeMode === 'system') {
      setCurrentTheme(systemColorScheme === 'dark' ? 'dark' : 'light');

      const suscription = Appearance.addChangeListener(({colorScheme}) => {
        setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
      });

      return () => {
        suscription.remove();
      };
    } else {
      setCurrentTheme(themeMode);
    }
  }, [themeMode, systemColorScheme]);

  return (
    <ThemeContext.Provider value={{themeMode, currentTheme, setThemeMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
