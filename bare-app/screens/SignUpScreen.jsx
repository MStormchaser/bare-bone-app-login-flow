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

import { COLORS, SIZES, icons } from "../constants";
import { StyleSheet } from "react-native";
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
        />
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
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
          onPress={register}
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

const styles = StyleSheet.create({
  headerWrapper: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: SIZES.large,
    marginTop: SIZES.large,
  },
  headerIconWrapper: {
    flex: 1,
    padding: SIZES.small,
  },
  headerIcon: {
    height: SIZES.xxLarge,
    width: SIZES.xxLarge,
  },
  headerText: {
    flex: 3,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    marginLeft: SIZES.xLarge * -1,
  },
  spacerHeader: {
    flex: 1,
  },
  termsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.xSmall,
  },
  termsTextPadding: {
    paddingLeft: SIZES.small,
  },
  spacerVertical: {
    paddingVertical: SIZES.medium,
  },
});
