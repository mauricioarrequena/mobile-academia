import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Collection} from '../types/Collection';
import CollectionListItem from './CollectionListItem';

const styles = StyleSheet.create({
  collectionList: {
    flex: 1,
  },
  activityIndicator: {
    marginTop: 20,
  },

  emptyText: {
    fontStyle: 'italic',
    color: '#888',
    marginTop: 12,
  },
  list: {
    gap: 10,
  },
});

interface CollectionListProps {
  collections: Collection[];
  collectionsLoading: boolean;
  reloadCollections: () => void;
}

export default function CollectionList({
  collections,
  collectionsLoading,
}: CollectionListProps) {
  let TextNoCollections;
  let FlastListCollections;

  if (collectionsLoading) {
    return <ActivityIndicator size="large" style={styles.activityIndicator} />;
  }

  if (collections.length === 0) {
    TextNoCollections = (
      <Text style={styles.emptyText}>No collections found.</Text>
    );
  } else {
    FlastListCollections = (
      <FlatList
        data={collections}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({item}) => <CollectionListItem colelction={item} />}
      />
    );
  }

  return (
    <View style={styles.collectionList}>
      {collections.length === 0 ? TextNoCollections : FlastListCollections}
    </View>
  );
}
