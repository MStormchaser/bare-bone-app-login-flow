import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles/globalStyle";

import styles from "../styles/signUp/signUpScreen.style";
import { logos, icons, COLORS } from "../constants";
import Checkbox from "../utils/Checkbox";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isCheckedTerms, setCheckedTerms] = useState(false);
  const [isCheckedNewsletter, setCheckedNewsletter] = useState(false);

  const register = () => {
    console.log("register button pressed");
    console.log(isCheckedTerms);
    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <SafeAreaView style={globalStyles.screenWrapper}>
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
        <Text style={styles.headerText}>Sign Up</Text>
        <View style={styles.spacerHeader}></View>
      </View>
      {/* Body */}
      <KeyboardAvoidingView style={globalStyles.containerBdy}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          selectionColor={COLORS.flamingo}
        />
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          selectionColor={COLORS.flamingo}
        />
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          selectionColor={COLORS.flamingo}
        />
        <View style={styles.termsWrapper}>
          <Checkbox
            selected={isCheckedNewsletter}
            onSelectedChange={setCheckedNewsletter}
          />
          <Text style={styles.termsTextPadding}>
            I agree to XYZ Terms of Service and Privacy Policy.
          </Text>
        </View>
        <View style={styles.termsWrapper}>
          <Checkbox
            selected={isCheckedTerms}
            onSelectedChange={setCheckedTerms}
          />
          <Text style={styles.termsTextPadding}>
            I agree to receive news and product updates from WattWaffle.
          </Text>
        </View>
        <View style={styles.spacerVertical} />
        <TouchableOpacity
          style={
            isCheckedTerms
              ? globalStyles.buttonPrimary
              : globalStyles.buttonDisabled
          }
          disabled={!isCheckedTerms}
          onPress={() => navigation.navigate("SignUpConfirmation")}
        >
          <Text
            style={
              isCheckedTerms
                ? globalStyles.buttonTextPrimary
                : globalStyles.buttonTextDisabled
            }
          >
            Sign Up now
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
