import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Start } from '../screens/start';
import { SignIn } from '../screens/signin';
/*
import { SignIn } from '../screens/signin';
import { Password } from '../screens/password';
import { PasswordComplete } from '../screens/passwordcomplete';
import { User } from '../screens/user';
import { UserAdress } from '../screens/useradress';
import { UserCompliments } from '../screens/usercompliments';
import { UserFinally } from '../screens/userfinally';
import { userDTO } from '../Interfaces/user';
*/

export type MainStack = {
  Start: undefined;
  Home: undefined;
  SignIn: { user: string };
  /*
  User: undefined;  
  Password: undefined;
  PasswordComplete: undefined;
  UserAdress: { user: userDTO };
  UserCompliments: { user: userDTO };
  UserFinally: undefined;
        <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="PasswordComplete" component={PasswordComplete} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="UserAdress" component={UserAdress} />
      <Stack.Screen name="UserCompliments" component={UserCompliments} />
      <Stack.Screen name="UserFinally" component={UserFinally} />
  */
}

const Stack = createStackNavigator<MainStack>();

export const MainStackRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />


    </Stack.Navigator>
  );
}