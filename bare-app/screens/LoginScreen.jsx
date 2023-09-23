import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles/globalStyle";

import styles from "../styles/login/loginScreen.style";

import { logos, icons, COLORS } from "../constants";
import { Firebase_Auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = Firebase_Auth;

  const signInEmailPassword = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Sign in failed" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyles.screenWrapper}>
      <StatusBar barStyle={"dark-content"} />
      {/* Header */}
      <View style={styles.containerHeader}>
        <Image source={logos.logoIcon} style={styles.headerImg} />
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={() => navigation.push("SignUp")}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* Body */}
      <View style={styles.containerBdy}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={globalStyles.TextInput}
          keyboardType="email-address"
          selectionColor={COLORS.flamingo}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={globalStyles.TextInput}
          selectionColor={COLORS.flamingo}
        />
        <View style={styles.spacerLarge}></View>
        {/* Sign In Button */}
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.black} />
        ) : (
          <TouchableOpacity
            onPress={signInEmailPassword}
            style={globalStyles.buttonPrimary}
          >
            <Text style={globalStyles.buttonTextPrimary}>Login</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.bodyPwForgetLink}
          onPress={() => navigation.push("PasswordRecovery")}
        >
          <Text style={globalStyles.buttonTextLightSmall}>
            I forgot my password
          </Text>
        </TouchableOpacity>

        {/* Passwordless Sign-In */}
        <TouchableOpacity
          style={styles.buttonMagicLinkWrapper}
          onPress={() => navigation.push("PasswordlessSignIn")}
        >
          <View style={styles.buttonMagicLinkContainer}>
            <Text style={styles.buttonMagicLinkTextLeft}>Get Magic Link</Text>
            <Image
              source={icons.shootingstar}
              style={styles.buttonMagicLinkImg}
            ></Image>
            <Text style={styles.buttonMagicLinkTextRight}>
              no password needed
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.spacerVerticalSmall}>or continue with</Text>
        <View style={styles.buttonSocialWrapper}>
          {/* Google Sign In */}
          <TouchableOpacity
            style={[
              globalStyles.buttonSecondary,
              globalStyles.buttonSecondaryFlex,
            ]}
            onPress={signInGoogle}
          >
            <View style={styles.buttonSocialContainer}>
              <Image source={icons.google} style={styles.buttonSocialIcon} />
              <Text style={styles.buttonSocialText}>Google</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.spacerHorizontalSmall}></View>
          <TouchableOpacity
            style={[
              globalStyles.buttonSecondary,
              globalStyles.buttonSecondaryFlex,
            ]}
          >
            <View style={styles.buttonSocialContainer}>
              <Image source={icons.apple} style={styles.buttonSocialIcon} />
              <Text style={styles.buttonSocialText}>Apple</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
