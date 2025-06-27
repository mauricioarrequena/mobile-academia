import {createContext} from 'react';

interface ThemeContextValueType {
  themeMode: ThemeMode;
  currentTheme: 'light' | 'dark';
  setThemeMode: (mode: ThemeMode) => void;
}

export type ThemeMode = 'light' | 'dark' | 'system';
export const STORAGE_KEY = 'user-theme-mode';
export const ThemeContext = createContext<ThemeContextValueType | undefined>(
  undefined,
);
