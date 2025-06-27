import useTheme from '../context/theme/useTheme';
import {darkThemeColors, lightThemeColors} from '../styles/Colors';

export const useThemedStyles = () => {
  const {currentTheme} = useTheme();
  const colors = currentTheme === 'dark' ? darkThemeColors : lightThemeColors;

  return {colors};
};
