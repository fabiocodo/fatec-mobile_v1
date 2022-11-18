import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStackRouter } from './app.routes';

export function Routes() {

  return (
    <NavigationContainer>
      <MainStackRouter />
    </NavigationContainer>
  )
}