import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  searchScreen: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 4,
  },
  input: {
    height: 48,
    paddingHorizontal: 0,
    paddingVertical: 4,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#6200ee',
    color: '#000',
  },
  serachScreenBody: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'green',
  },
  serachScreenBodyEmpty: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enptyContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    color: 'black',
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

const SearchScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.searchScreen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search movies"
          placeholderTextColor="#aaa"
          value={text}
          onChangeText={setText}
        />
      </View>
      <View style={[styles.serachScreenBody, styles.serachScreenBodyEmpty]}>
        <View style={styles.enptyContentContainer}>
          <Icon name="search" size={30} color="#4F8EF7" />
          <Text style={[styles.textLarge, styles.textBold]}>
            Search for Movies
          </Text>
          <Text style={styles.textSmall}>
            Find your favorite movies and discover new ones
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
