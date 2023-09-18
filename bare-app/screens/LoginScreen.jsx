import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles/globalStyle";

import styles from "../styles/login/loginScreen.style";

import { logos, icons } from "../constants";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
  };

  return (
    <SafeAreaView style={globalStyles.screenWrapper}>
      {/* Header */}
      <View style={styles.containerHeader}>
        <Image source={logos.logoIcon} style={styles.headerImg} />
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={() => navigation.push("SignUp")}
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
      {/* Body */}
      <View style={styles.containerBdy}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={globalStyles.TextInput}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={globalStyles.TextInput}
        />
        <View style={styles.spacerLarge}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={globalStyles.buttonPrimary}
        >
          <Text style={globalStyles.buttonTextPrimary}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bodyPwForgetLink}>
          <Text style={globalStyles.buttonTextLightSmall}>
            I forgot my password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMagicLinkWrapper}>
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
          <TouchableOpacity style={globalStyles.buttonSecondary}>
            <View style={styles.buttonSocialContainer}>
              <Image source={icons.google} style={styles.buttonSocialIcon} />
              <Text style={styles.buttonSocialText}>Google</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.spacerHorizontalSmall}></View>
          <TouchableOpacity style={globalStyles.buttonSecondary}>
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
