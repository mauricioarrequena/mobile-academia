import {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ThemeColors } from '../types/ThemeColors';
import { useThemedStyles } from '../hooks/useThemedStyles';

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontFamily: 'Gilroy-SemiBold',
      color: colors.text,
    },
    link: {
      color: colors.primary,
    },
    titlefont: {
      fontFamily: 'Gilroy-Bold',
      fontSize: 24,
    },
    subtitlefont: {
      fontFamily: 'Gilroy-Regular',
      fontSize: 16,
    },
    textFont: {
      fontFamily: 'Gilroy-SemiBold',
    },
    textLarge: {
      fontSize: 20,
    },
    textSmall: {
      fontSize: 16,
    },
    textBold: {
      fontWeight: 'bold',
    },
  });

interface MovieRowSectionHeaderProps {
  categoryName: string;
  onPressSeeMore: () => void;
}
const MovieRowSectionHeader: FC<MovieRowSectionHeaderProps> = ({
  categoryName,
  onPressSeeMore,
}) => {
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <TouchableOpacity onPress={() => onPressSeeMore()}>
        <Text style={[styles.textFont, styles.link]}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieRowSectionHeader;
