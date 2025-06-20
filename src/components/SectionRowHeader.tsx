import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
  });

type RootStackParamList = {
  Tabs: undefined;
  SectionScreen: {categoryName: string; endpoint: string; params: any};
};

interface SectionRowHeaderProps {
  categoryName: string;
}

const SectionRowHeader: FC<SectionRowHeaderProps> = ({categoryName}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const styles = getStyles(true);

  const handleOnPressSeeMore = () => {
    navigation.navigate('SectionScreen', {
      categoryName: categoryName,
      endpoint: 'discover/movie',
      params: {
        sort_by: 'popularity.desc',
        with_companies: 420,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <TouchableOpacity
        style={styles.linkWrapper}
        onPress={handleOnPressSeeMore}>
        <Text style={[styles.textFont, styles.link]}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionRowHeader;
