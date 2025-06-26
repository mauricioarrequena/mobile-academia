import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';

type Collection = {
  id: number;
  name: string;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  collections: Collection[];
  movieTitle: string;
  onCreateNewCollection: () => void;
  onAddToCollection: (collectionId: number) => void;
};

const screenHeight = Dimensions.get('window').height;

export default function AddToCollectionsModal({
  visible,
  onClose,
  collections,
  movieTitle,
  onCreateNewCollection,
  onAddToCollection,
}: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {/* Semi-transparent light gray overlay */}
      <Pressable style={styles.overlay} onPress={onClose} />

      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add to Collections</Text>
        <Text style={styles.subtitle}>
          Select collections to add "{movieTitle}" to
        </Text>

        {collections.length === 0 ? (
          <View style={styles.noCollectionsContainer}>
            <Text style={styles.noCollectionsText}>No collections available</Text>
            <Text style={styles.noCollectionsText}>Create your first collection!</Text>

            <TouchableOpacity
              style={styles.createButton}
              onPress={onCreateNewCollection}
              activeOpacity={0.7}
            >
              <Text style={styles.createButtonText}>Create New Collection</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <FlatList
              data={collections}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.listContainer}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.collectionItem}
                  onPress={() => onAddToCollection(item.id)}
                  activeOpacity={0.6}
                >
                  <Text style={styles.collectionName}>{item.name}</Text>
                </TouchableOpacity>
              )}
              ListFooterComponent={
                <TouchableOpacity
                  style={styles.createButton}
                  onPress={onCreateNewCollection}
                  activeOpacity={0.7}
                >
                  <Text style={styles.createButtonText}>Create New Collection</Text>
                </TouchableOpacity>
              }
            />
          </>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 245, 0.7)', // light gray with 70% opacity
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    height: screenHeight * 0.75,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#ddd', // subtle border instead of shadow
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: '#202124',
  },
  subtitle: {
    fontSize: 16,
    color: '#5f6368',
    marginBottom: 20,
  },
  noCollectionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCollectionsText: {
    fontSize: 16,
    color: '#5f6368',
    marginBottom: 6,
    textAlign: 'center',
  },
  createButton: {
    marginTop: 20,
    backgroundColor: '#1a73e8', // Material Blue 600
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 4,
    alignSelf: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  listContainer: {
    paddingBottom: 20,
  },
  collectionItem: {
    paddingVertical: 16,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  collectionName: {
    fontSize: 18,
    color: '#202124',
  },
});
