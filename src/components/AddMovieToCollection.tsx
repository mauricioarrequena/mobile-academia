import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useColorScheme,
  FlatList,
} from 'react-native';
import {getDBConnection} from '../database/db';
import {Collection} from '../types/Collection';
import {useEffect, useState} from 'react';
import CollectionListItem from './CollectionListItem';

function getStyles(isDarkMode: boolean) {
  return StyleSheet.create({
    card: {},
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
    listContainer: {
      gap: 20,
    },
  });
}

interface AddMovieToCollectionProps {
  onCancel: () => void;
  onSucress: () => void;
}

const AddMovieToCollection = ({
  onCancel,
  onSucress,
}: AddMovieToCollectionProps) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loadingCollections, setLoadingCollections] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  useEffect(() => {
    loadCollections();
  }, []);

  const loadCollections = async () => {
    try {
      const database = await getDBConnection();
      const results = await database.executeSql('SELECT * FROM Collections');
      const rawRows = results[0].rows;
      const items: Collection[] = [];
      for (let i = 0; i < rawRows.length; i++) {
        items.push(rawRows.item(i));
      }
      setCollections(items);
    } catch (error) {
      console.error('Error loading collections:', error);
    } finally {
      setLoadingCollections(false);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Add to collections</Text>
      <FlatList
        data={collections}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => <CollectionListItem colelction={item} />}
      />

      <View style={styles.buttonRow}>
        <Pressable style={styles.textButton} onPress={onCancel}>
          <Text style={styles.textButtonText}>Cancel</Text>
        </Pressable>

        <Pressable style={styles.filledButton} onPress={onSucress}>
          <Text style={styles.filledButtonText}>Create collection</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddMovieToCollection;
