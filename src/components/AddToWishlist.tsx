import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface WishlistProps {
  onPress: () => void;
  isSelected: boolean;
  style: ViewStyle;
}

const AddToWishlist = ({onPress, isSelected = true, style}: WishlistProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <FontAwesome5 name="heart" solid={isSelected} color="#E3D947" size={24} />
    </TouchableOpacity>
  );
};

export default AddToWishlist;
