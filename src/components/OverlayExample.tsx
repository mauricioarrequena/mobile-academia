import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function OverlayExample() {
  return (
    <View style={styles.posterContainer}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        }}
        style={styles.posterImage}
      />
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playText}>▶️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  posterContainer: {
    width: 200,
    height: 300,
    borderWidth: 3,
    borderColor: 'red',
    position: 'relative',
  },
  posterImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    borderWidth: 5,
    borderColor: 'blue',
  },
  playButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'green',
  },
  playText: {
    color: 'white',
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'yellow',
  },
});
