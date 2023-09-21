import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import React from "react";
import { icons } from "../constants";
import globalStyle from "../styles/globalStyle";
import styles from "../styles/signUp/passwordlessSignUpScreen.style";

const PasswordlessSignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyle.screenWrapper}>
      <StatusBar barStyle={"dark-content"} />
      {/* Header */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerIconWrapper}
        >
          <Image source={icons.arrowLeft} style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Get a magic link</Text>
        <Text style={styles.spacerHeader}></Text>
      </View>
      {/* Body */}
      <View style={styles.bodyWrapper}>
        <View>
          <Text style={styles.confirmationText}>
            This is a passwordless login. We will send you an email with a magic
            link for you to log-in as simple as a push of a button. Type your
            email below.
          </Text>
        </View>
        <View>
          <TextInput
            style={[globalStyle.TextInput, styles.textInputSpacing]}
            keyboardType="email-address"
          />
          <TouchableOpacity
            style={globalStyle.buttonPrimary}
            onPress={() => navigation.navigate("PasswordlessConfirmation")}
          >
            <Text style={globalStyle.buttonTextPrimary}>Confirm</Text>
          </TouchableOpacity>
          <View style={styles.buttonSpacing}></View>
          <TouchableOpacity style={globalStyle.buttonSecondaryText}>
            <View style={globalStyle.buttonSecondaryUnderline}>
              <Text style={styles.emailButtonText}>Open email app</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordlessSignInScreen;
