import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeContainer from '../screens/Home/HomeContainer';
import AppTab from './AppTab';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Root() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppTab />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
