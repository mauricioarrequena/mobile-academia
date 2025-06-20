import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

const styles = StyleSheet.create({
  sectionScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
});

type RootStackParamList = {
  Tabs: undefined;
  SectionScreen: {categoryName: string};
};

const SectionScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'SectionScreen'>>();
  const navigation = useNavigation<any>();
  const categoryName = route.params.categoryName;

  const handleOnPressNavigateExample = () => {
    navigation.navigate('Tabs', {
      screen: 'asdas', //navigates to home if value is random 
    });
  };

  return (
    <View style={styles.sectionScreen}>
      <Text>Here you can see more of {categoryName}</Text>
      <TouchableOpacity>
        <Text onPress={handleOnPressNavigateExample}>Navigate example</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionScreen;
