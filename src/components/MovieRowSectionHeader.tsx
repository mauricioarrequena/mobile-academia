import {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // borderWidth: 1,
      // borderColor: 'red',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : 'black',
      // borderWidth: 1,
      // borderColor: 'green',
    },
    linkWrapper: {
      // borderWidth: 1,
      // borderColor: 'blue',
    },
    link: {
      fontWeight: 'bold',
      color: '#F2C94C',
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
      fontFamily: 'Gilroy-Bold',
    },
    text: {
      textAlign: 'center',
      color: isDarkMode ? '#E0E0E0' : '#212121',
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
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <TouchableOpacity
        style={styles.linkWrapper}
        onPress={() => onPressSeeMore()}>
        <Text style={[styles.textFont, styles.link]}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieRowSectionHeader;
