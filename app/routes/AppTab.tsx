import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar, {TAB_DATA} from '../components/TabBar';
import HomeContainer from '../screens/Home/HomeContainer';
import ProfileContainer from '../screens/Profile/ProfileContainer';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

function AppTab() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={TAB_DATA.HOME.name} component={HomeContainer} />
      <Tab.Screen name={TAB_DATA.WHISH_LIST.name} component={HomeContainer} />
      <Tab.Screen name={TAB_DATA.TIPS.name} component={HomeContainer} />
      <Tab.Screen name={TAB_DATA.INBOX.name} component={HomeContainer} />
      <Tab.Screen name={TAB_DATA.PROFILE.name} component={ProfileContainer} />
    </Tab.Navigator>
  );
}

export default AppTab;
