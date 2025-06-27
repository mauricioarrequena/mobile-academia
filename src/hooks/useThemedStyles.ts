import useTheme from '../context/theme/useTheme';
import {darkColors, lightColors} from '../styles/Colors';

export const useThemedStyles = () => {
  const {currentTheme} = useTheme();
  const colors = currentTheme === 'dark' ? darkColors : lightColors;

  return {colors};
};
