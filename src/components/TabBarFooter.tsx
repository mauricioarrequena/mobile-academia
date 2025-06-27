import {StyleSheet, Text, View} from 'react-native';
import {useLinkBuilder} from '@react-navigation/native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {PlatformPressable} from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {useThemedStyles} from '../hooks/useThemedStyles';
import {ThemeColors} from '../types/ThemeColors';

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    tabBarFooter: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.background,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 8,
      paddingBottom: 25,
    },
    iconActive: {
      color: '#F2C94C',
    },
    labelInactive: {
      fontSize: 12,
      color: colors.text,
      marginTop: 4,
      fontFamily: 'Gilroy-SemiBold',
    },
    labelActive: {
      fontSize: 12,
      color: '#F2C94C',
      marginTop: 4,
      fontFamily: 'Gilroy-Bold',
    },
  });

const TabBarFooter = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {buildHref} = useLinkBuilder();
  const {colors} = useThemedStyles();
  const styles = getStyles(colors);

  const iconNames = [
    'home-outline',
    'search-outline',
    'heart-outline',
    'person-outline',
  ];

  return (
    <View style={styles.tabBarFooter}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            style={styles.tabItem}
            href={buildHref(route.name, route.params)}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon
              name={iconNames[index]}
              size={20}
              color={isFocused ? colors.primary : colors.icon}
            />
            <Text style={isFocused ? styles.labelActive : styles.labelInactive}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

export default TabBarFooter;
