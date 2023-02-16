import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './MainTab';

export default function Navigator() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}
