import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { Collection } from '../types/Collection';
import { getDBConnection } from '../database/db';

const styles = StyleSheet.create({
  collectionList: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  listItemPressed: {
    backgroundColor: '#f1f1f1',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#888',
    marginTop: 12,
  },
  activityIndicator: {
    marginTop: 20,
  },
});

export default function CollectionList() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCollections();
  }, []);

  const loadCollections = async () => {
    try {
      const database = await getDBConnection();
      const results = await database.executeSql('SELECT * FROM Collections');
      const rawRows = results[0].rows;
      const collectionItem: Collection[] = [];
      for (let i = 0; i < rawRows.length; i++) {
        collectionItem.push(rawRows.item(i));
      }
      setCollections(collectionItem);
      // // Fake loading delay of 2 seconds to show spinner
      // await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
      console.error('Error loading collections:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.activityIndicator} />;
  }

  return (
    <View style={styles.collectionList}>
      <Text style={styles.title}>My Collections</Text>
      {collections.length === 0 ? (
        <Text style={styles.emptyText}>No collections found.</Text>
      ) : (
        <FlatList
          data={collections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              android_ripple={{ color: '#ddd' }}
              style={({ pressed }) => [
                styles.listItem,
                pressed && styles.listItemPressed,
              ]}
              onPress={() => {
                /* You can add item click behavior here */
              }}
            >
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>
                  Created: {new Date(item.created_at).toLocaleDateString()}
                </Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
