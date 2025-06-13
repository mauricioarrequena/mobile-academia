import {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface CarouselHeaderProps {
  categoryName: string;
}

const CarouselHeader: FC<CarouselHeaderProps> = ({categoryName}) => {
  const handlePress = () => {
    console.log(`See more pressed for category: ${categoryName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
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

export default CarouselHeader;
