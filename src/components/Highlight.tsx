import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { useThemedStyles } from '../hooks/useThemedStyles';
import { ThemeColors } from '../types/ThemeColors';

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    highlight: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingHorizontal: 28,
      gap: 10,
      backgroundColor: colors.background,
    },
    imageContainer: {},
    image: {
      width: '100%',
      height: 150,
      backgroundColor: 'blue',
      objectFit: 'cover',
    },
    contentContainer: {
      gap: 8,
    },
    text: {
      color: colors.text,
      fontFamily: 'Gilroy-Regular',
    },
    button: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 8,
      backgroundColor: '#F2C94C',
    },
    buttonPressed: {
      backgroundColor: '#D6B340',
    },
    buttonText: {
      color: colors.buttonText,
      fontWeight: '500',
      fontFamily: 'Gilroy-Regular',
      fontSize: 16,
    },
    textLarge: {
      fontSize: 20,
    },
    textSmall: {
      fontSize: 16,
    },
    textBold: {
      fontFamily: 'Gilroy-Bold',
    },
  });

const Highlight = () => {
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);

  return (
    <View style={styles.highlight}>
      <View testID="image-container" style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/disccount.jpg')}
          style={styles.image}
        />
      </View>
      <View testID="content-container" style={styles.contentContainer}>
        <Text style={[styles.text, styles.textLarge, styles.textBold]}>
          Black friday is here!
        </Text>
        <Text style={[styles.text, styles.textSmall]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Viverra
          saciss pulvinar, auctor nibth nibth iaculis id.
        </Text>
        <Pressable
          style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}>
          <Text
            style={[
              styles.text,
              styles.textSmall,
              styles.textBold,
              styles.buttonText,
            ]}>
            Check details
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Highlight;
