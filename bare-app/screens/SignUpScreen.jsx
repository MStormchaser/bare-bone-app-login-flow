import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles/globalStyle";

import styles from "../styles/signUp/signUpScreen.style";
import { logos, icons, COLORS } from "../constants";
import Checkbox from "../utils/Checkbox";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Firebase_Auth } from "../firebaseConfig";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = Firebase_Auth;

  const [isCheckedTerms, setCheckedTerms] = useState(false);
  const [isCheckedNewsletter, setCheckedNewsletter] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Create Account failed" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyles.screenWrapper}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
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
      <KeyboardAvoidingView
        style={globalStyles.containerBdy}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          selectionColor={COLORS.flamingo}
        />
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          selectionColor={COLORS.flamingo}
          autoCapitalize="none"
        />
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          selectionColor={COLORS.flamingo}
          autoCapitalize="none"
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
            I agree to receive news and product updates from this awesome App.
          </Text>
        </View>
        <View style={styles.spacerVertical} />
        {/* Sign Up Button */}
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.black} />
        ) : (
          <TouchableOpacity
            style={
              isCheckedTerms
                ? globalStyles.buttonPrimary
                : globalStyles.buttonDisabled
            }
            disabled={!isCheckedTerms}
            onPress={signUp}
          >
            <Text
              style={
                isCheckedTerms
                  ? globalStyles.buttonTextPrimary
                  : globalStyles.buttonTextDisabled
              }
            >
              Create Account
            </Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
