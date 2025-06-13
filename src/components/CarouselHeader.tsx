import {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';

interface CarouselHeaderProps {
  categoryName: string;
}

const CarouselHeader: FC<CarouselHeaderProps> = ({categoryName}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const themedStyles = getThemedStyles(isDarkMode);

  const handlePress = () => {
    console.log(`See more pressed for category: ${categoryName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, themedStyles.title]}>{categoryName}</Text>
      <TouchableOpacity style={styles.linkWrapper} onPress={handlePress}>
        <Text style={styles.link}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: 'black',
    // borderWidth: 1,
    // borderColor: 'green',
  },
  linkWrapper: {
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  link: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#F2C94C',
  },
});

// 👇 Dynamic dark/light overrides
const getThemedStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    title: {
      color: isDarkMode ? '#fff' : 'black',
    },
  });

export default CarouselHeader;
