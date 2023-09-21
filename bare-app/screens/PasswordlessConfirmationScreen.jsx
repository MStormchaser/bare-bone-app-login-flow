import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../constants";
import styles from "../styles/signUp/passwordlessConfirmation.style";
import globalStyle from "../styles/globalStyle";

const PasswordlessConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.heading}>Check your inbox.</Text>
      <Text style={styles.description}>
        Click the link we sent to xyzEmail to sign in.
      </Text>
      <TouchableOpacity
        style={globalStyle.buttonPrimary}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={globalStyle.buttonTextPrimary}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordlessConfirmationScreen;
