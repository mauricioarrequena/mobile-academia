import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  useColorScheme,
} from 'react-native';
import AddCollection from '../components/AddCollection';
import CollectionList from '../components/CollectionList';
import {getDBConnection} from '../database/db';
import {Collection} from '../types/Collection';

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    collectionsScreen: {
      flex: 1,
      flexDirection: 'column',
      padding: 16,
      backgroundColor: isDarkMode ? '#0a0a0b' : '#ffffff',
    },
    createButton: {
      marginTop: 80,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#6200ee',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    createButtonPressed: {
      backgroundColor: isDarkMode ? '#352b4d' : '#eaddff',
    },
    createButtonText: {
      color: '#6200ee',
      fontWeight: '500',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)',
    },
    modalBox: {
      width: '100%',
      backgroundColor: isDarkMode ? '#1c1c1e' : '#ffffff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
  });

const WishlistScreen = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loadingCollections, setLoadingCollections] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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

  const handleOnCancel = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.collectionsScreen}>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={({pressed}) => [
          styles.createButton,
          pressed && styles.createButtonPressed,
        ]}>
        <Text style={styles.createButtonText}>Create Collection</Text>
      </Pressable>

      <CollectionList
        collections={collections}
        collectionsLoading={loadingCollections}
        reloadCollections={loadCollections}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <AddCollection
              onCancel={handleOnCancel}
              onSucress={loadCollections}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WishlistScreen;
