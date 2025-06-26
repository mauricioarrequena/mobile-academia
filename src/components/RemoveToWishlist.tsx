import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useWishlist } from '../context/WishlistContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { Movie } from '../types/Movie';

interface WishlistProps {
    item: Movie;
}

const styles = StyleSheet.create({
    trashIconWrapper: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(128,128,128,0.6)',
        padding: 4,
        borderRadius: 12,
    },
});

const RemoveToWishList = ({ item }: WishlistProps) => {
    const { isInWishlist, removeFromWishlist } = useWishlist();
    const selected = isInWishlist(item.id);

    return (
        <TouchableOpacity
            onPress={() => removeFromWishlist(item.id)}
            style={styles.trashIconWrapper}>
            <Icon name="trash" size={16} color="#fff" />
        </TouchableOpacity>
    );
};

export default RemoveToWishList;
