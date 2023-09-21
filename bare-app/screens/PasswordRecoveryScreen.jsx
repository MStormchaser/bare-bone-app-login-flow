import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/signUp/passwordRecoveryScreen.style";
import { COLORS, icons } from "../constants";
import globalStyle from "../styles/globalStyle";

const PasswordRecoveryScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.screenWrapper}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerIconWrapper}
        >
          <Image
            source={icons.arrowLeft}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Password recovery</Text>
        <View style={styles.spacerHeader}></View>
      </View>
      {/* Body */}
      <View style={styles.bodyWrapper}>
        <Text style={styles.heading}>
          Help is coming! Recover your password.
        </Text>
        <Text style={styles.description}>
          Enter the email you use for NAME OF APP.
        </Text>
        <TextInput
          placeholder="Your Email"
          value={email}
          onChange={setEmail}
          style={globalStyle.TextInput}
          keyboardType="email-address"
          selectionColor={COLORS.flamingo}
        />
        <TouchableOpacity
          style={globalStyle.buttonPrimary}
          onPress={() => navigation.navigate("PasswordRecoveryConfirmation")}
        >
          <Text style={globalStyle.buttonTextPrimary}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordRecoveryScreen;
