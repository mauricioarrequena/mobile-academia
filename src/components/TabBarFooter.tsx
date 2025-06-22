import {StyleSheet, Text, View} from 'react-native';
import {useLinkBuilder} from '@react-navigation/native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {PlatformPressable} from '@react-navigation/elements';

const styles = StyleSheet.create({
  tabBarFooter: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'purple',
    paddingHorizontal: 10,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
  },
});

const TabBarFooter = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {buildHref} = useLinkBuilder();
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
            style={styles.tabItem}
            key={route.key}
            href={buildHref(route.name, route.params)}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Text>{label}</Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

export default TabBarFooter;
