import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  useColorScheme,
} from 'react-native';

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    highlight: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingHorizontal: 28,
      gap: 10,
      backgroundColor: isDarkMode ? '#121212' : 'white',
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
      color: isDarkMode ? '#E0E0E0' : '#121212',
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
      color: 'white',
      fontWeight: '500',
      fontSize: 16,
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

const Highlight = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.highlight}>
      <View testID="image-container" style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://placehold.co/600x400?text=save+up+to+50+black+friday',
          }}
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
          <Text style={[styles.buttonText, styles.textBold]}>
            Check details
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Highlight;
