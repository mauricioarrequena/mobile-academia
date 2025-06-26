import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  useColorScheme,
  Pressable,
} from 'react-native';
import {getDBConnection} from '../database/db';
import {Collection} from '../types/Collection';
import AddCollection from '../components/AddCollection';
import CollectionList from '../components/CollectionList';

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    whishlistScreen: {
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
    wishlistScreenBody: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wishlistScreenBodyEmpty: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    enptyContentContainer: {
      alignItems: 'center',
    },
    wishlistScreenBodyWithItems: {
      flex: 1,
      flexDirection: 'column',
      gap: 16,
    },
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      marginBottom: 12,
    },
    cardContainerImage: {},
    cardContainerInformation: {
      flex: 1,
      flexDirection: 'column',
    },
    cardContainerControls: {
      justifyContent: 'flex-start',
    },
    movieImage: {
      width: 100,
      height: 150,
      borderRadius: 8,
    },
    textLarge: {
      fontSize: 20,
      color: isDarkMode ? '#ffffff' : '#000000',
    },
    textSmall: {
      fontSize: 16,
      color: isDarkMode ? '#cccccc' : '#333333',
    },
    textBold: {
      fontWeight: 'bold',
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

const CollectionsScreen = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loadingCollections, setLoadingCollections] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);
  const [modalVisible, setModalVisible] = useState(false);

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
    <View>
      <Text>CollectionsScreen</Text>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
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

export default CollectionsScreen;
