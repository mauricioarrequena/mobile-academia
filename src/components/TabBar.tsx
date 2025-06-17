import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const getStyles = (isDarkMode: boolean) => {
  const inactiveColor = isDarkMode ? '#aaa' : '#888';
  return {
    styles: StyleSheet.create({
      container: {
        flexDirection: 'row',
        height: 80, // taller bar
        borderTopWidth: 1,
        paddingBottom: 15,
        borderTopColor: isDarkMode ? '#333' : '#ccc',
        backgroundColor: isDarkMode ? '#000' : '#fff',
      },
      tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8, // spacing between icon and text
      },
      label: {
        fontSize: 13, // optional: slightly bigger text
        marginTop: 4, // more space between icon and label
      },
    }),
    getTextColor: (isFocused: boolean) =>
      isFocused ? '#F2C94C' : inactiveColor,
    getIconColor: (isFocused: boolean) =>
      isFocused ? '#F2C94C' : inactiveColor,
  };
};

const iconMap: Record<string, string> = {
  Home: 'home',
  Search: 'search',
  Wishlist: 'heart',
  Profile: 'person',
};

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const {styles, getTextColor, getIconColor} = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;
        const iconName = iconMap[route.name] || 'help-circle';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={styles.tab}
            activeOpacity={0.7}>
            <Ionicons
              name={iconName}
              size={24}
              color={getIconColor(isFocused)}
            />
            <Text style={[styles.label, {color: getTextColor(isFocused)}]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
