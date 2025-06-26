import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { getDBConnection } from '../database/db';

interface AddCollectionProps {
  onCancel: () => void;
}

export default function AddCollection({ onCancel }: AddCollectionProps) {
  const [collectionName, setCollectionName] = useState('');
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  const handleAddCollection = async () => {
    if (!collectionName.trim()) return;

    try {
      const db = await getDBConnection();
      await db.executeSql('INSERT INTO Collections (name) VALUES (?)', [
        collectionName,
      ]);
      setCollectionName('');
    } catch (error) {
      console.error('Failed to insert collection:', error);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Create collection</Text>
      <Text style={styles.subtitle}>Organize your favorite movies</Text>

      <Text style={styles.label}>Collection name</Text>
      <TextInput
        style={styles.input}
        placeholder="My chill movies"
        placeholderTextColor={isDarkMode ? '#aaa' : '#999'}
        maxLength={50}
        value={collectionName}
        onChangeText={setCollectionName}
      />
      <Text style={styles.charCounter}>
        {collectionName.length}/50 characters
      </Text>

      <View style={styles.buttonRow}>
        <Pressable style={styles.textButton} onPress={onCancel}>
          <Text style={styles.textButtonText}>Cancel</Text>
        </Pressable>

        <Pressable style={styles.filledButton} onPress={handleAddCollection}>
          <Text style={styles.filledButtonText}>Create collection</Text>
        </Pressable>
      </View>
    </View>
  );
}

function getStyles(isDarkMode: boolean) {
  return StyleSheet.create({
    card: {
      // margin: 20,
      // padding: 20,
      // backgroundColor: isDarkMode ? '#0a0a0b' : '#ffffff',
      // borderColor: isDarkMode ? '#333' : '#ddd',
      // borderRadius: 12,
      // borderWidth: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 4,
      color: isDarkMode ? '#fff' : '#222',
    },
    subtitle: {
      fontSize: 14,
      color: isDarkMode ? '#aaa' : '#666',
      marginBottom: 20,
    },
    label: {
      fontSize: 15,
      fontWeight: '500',
      marginBottom: 6,
      color: isDarkMode ? '#eee' : '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: isDarkMode ? '#555' : '#bbb',
      borderRadius: 6,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 15,
      backgroundColor: isDarkMode ? '#1a1a1c' : '#fafafa',
      color: isDarkMode ? '#fff' : '#000',
    },
    charCounter: {
      fontSize: 12,
      color: isDarkMode ? '#999' : '#888',
      marginTop: 4,
      marginBottom: 20,
      textAlign: 'right',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 12,
    },
    textButton: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 6,
    },
    textButtonText: {
      color: '#6200ee',
      fontSize: 15,
      fontWeight: '500',
    },
    filledButton: {
      backgroundColor: '#6200ee',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 6,
    },
    filledButtonText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: '500',
    },
  });
}
