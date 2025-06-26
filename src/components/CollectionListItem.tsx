import React from 'react';
import {View, Text, Pressable, StyleSheet, useColorScheme} from 'react-native';
import {Collection} from '../types/Collection';

const styles = StyleSheet.create({
  collectionListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardDark: {
    backgroundColor: '#1e1e1e',
    borderColor: '#333',
  },
  cardPressed: {
    backgroundColor: '#f5f5f5',
  },
  textContentContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  textLarge: {
    fontSize: 20,
  },
  textRegular: {
    fontSize: 16,
  },
  textSmall: {
    fontSize: 14,
  },
  textExtraSmall: {
    fontSize: 12,
  },
  textBold: {
    fontWeight: 'bold',
  },

  // name: {
  //   fontSize: 16,
  //   fontWeight: '400',
  //   color: '#000',
  // },
  // date: {
  //   fontSize: 12,
  //   color: '#666',
  //   marginTop: 4,
  // },
  // textDark: {
  //   color: '#fff',
  // },
  // textMutedDark: {
  //   color: '#aaa',
  // },
});

interface CollectionListItemProps {
  colelction: Collection;
}

const CollectionListItem = ({colelction: movie}: CollectionListItemProps) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.collectionListItem}>
      <View>
        <Text>radio</Text>
      </View>
      <View style={styles.textContentContainer}>
        <Text style={[styles.textSmall, styles.textBold]}>
          {movie.name}
        </Text>
        <Text style={[styles.textExtraSmall]}>
          0 movies
        </Text>
      </View>
    </View>
  );
};

export default CollectionListItem;
