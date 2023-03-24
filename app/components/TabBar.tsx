import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const TAB_DATA = {
  HOME: {
    label: 'Explore',
    name: 'HOME',
    Icon: AntDesign,
    iconName: 'search1',
  },
  WHISH_LIST: {
    label: 'Wishlists',
    name: 'WHISH_LIST',
    Icon: AntDesign,
    iconName: 'hearto',
  },
  TIPS: {
    label: 'Tips',
    name: 'TIPS',
    Icon: FontAwesome5Brands,
    iconName: 'airbnb',
  },
  INBOX: {
    label: 'Inbox',
    name: 'INBOX',
    Icon: MaterialCommunityIcons,
    iconName: 'message-reply-outline',
  },
  PROFILE: {
    label: 'Profile',
    name: 'PROFILE',
    Icon: FontAwesome,
    iconName: 'user-o',
  },
};

function TabBar({state, descriptors, navigation}: any) {
  return (
    <View style={styles.bottomNavBar}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Tab = TAB_DATA[route.name as keyof typeof TAB_DATA];
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.textNavBtnEnd}>
            <Tab.Icon
              name={Tab.iconName}
              style={[styles.icon, {color: isFocused ? '#673ab7' : '#222'}]}
            />
            <Text
              style={[
                styles.textNavBot,
                {color: isFocused ? '#673ab7' : '#222'},
              ]}>
              {Tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  bottomNavBar: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  textNavBtnEnd: {
    flex: 1,
    marginHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNavBot: {
    fontSize: 11,
    color: '#808080',
    paddingTop: 5,
  },
  icon: {
    fontSize: 23,
    color: 'black',
  },
});
