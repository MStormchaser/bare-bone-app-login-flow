import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/signUp/passwordResetConfirmation.style";
import globalStyle from "../styles/globalStyle";

const PasswordResetConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.heading}>Success</Text>
      <Text style={styles.description}>Your password has been changed.</Text>
      <TouchableOpacity
        style={globalStyle.buttonPrimary}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={globalStyle.buttonTextPrimary}>Back to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordResetConfirmationScreen;
