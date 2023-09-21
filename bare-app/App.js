import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
