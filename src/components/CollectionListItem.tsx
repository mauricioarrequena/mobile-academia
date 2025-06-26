import React from 'react';
import {View, Text, Pressable, StyleSheet, useColorScheme} from 'react-native';
import {Collection} from '../types/Collection';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
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
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  textDark: {
    color: '#fff',
  },
  textMutedDark: {
    color: '#aaa',
  },
});

interface CollectionListItemProps {
  colelction: Collection;
}

const CollectionListItem = ({colelction: movie}: CollectionListItemProps) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Pressable
      android_ripple={{color: isDark ? '#333' : '#ddd'}}
      style={({pressed}) => [
        styles.card,
        isDark && styles.cardDark,
        pressed && styles.cardPressed,
      ]}
      onPress={() => {
        // Add navigation or selection logic here
      }}>
      <View style={styles.content}>
        <Text style={[styles.name, isDark && styles.textDark]}>
          {movie.name}
        </Text>
        <Text style={[styles.date, isDark && styles.textMutedDark]}>
          0 movies
        </Text>
      </View>
    </Pressable>
  );
};

export default CollectionListItem;
