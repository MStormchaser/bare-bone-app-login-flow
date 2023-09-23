// import * as React from "react";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { User, onAuthStateChanged } from "firebase/auth";
import { Firebase_Auth } from "./firebaseConfig";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignUpConfirmationScreen from "./screens/SignUpConfirmationScreen";
import PasswordlessSignInScreen from "./screens/PasswordlessSignInScreen";
import PasswordRecoveryScreen from "./screens/PasswordRecoveryScreen";
import PasswordlessConfirmationScreen from "./screens/PasswordlessConfirmationScreen";
import PasswordRecoveryConfirmScreen from "./screens/PasswordRecoveryConfirmScreen";
import PasswordRecoveryResetScreen from "./screens/PasswordRecoveryResetScreen";
import PasswordResetConfirmationScreen from "./screens/PasswordResetConfirmationScreen";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={HomeScreen} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(Firebase_Auth, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} />
        ) : (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Group>
        )}

        <Stack.Screen
          name="PasswordRecovery"
          component={PasswordRecoveryScreen}
        />
        <Stack.Screen
          name="PasswordRecoveryConfirmation"
          component={PasswordRecoveryConfirmScreen}
        />
        <Stack.Screen
          name="PasswordRecoveryReset"
          component={PasswordRecoveryResetScreen}
        />
        <Stack.Screen
          name="PasswordResetConfirmation"
          component={PasswordResetConfirmationScreen}
        />
        <Stack.Screen
          name="SignUpConfirmation"
          component={SignUpConfirmationScreen}
        />
        <Stack.Screen
          name="PasswordlessSignIn"
          component={PasswordlessSignInScreen}
        />
        <Stack.Screen
          name="PasswordlessConfirmation"
          component={PasswordlessConfirmationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
