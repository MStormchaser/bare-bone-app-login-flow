import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { icons } from "../constants";
import globalStyle from "../styles/globalStyle";
import styles from "../styles/signUp/passwordlessSignUpScreen.style";

const PasswordlessSignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyle.screenWrapper}>
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
          <TouchableOpacity style={styles.emailButton}>
            <Text style={styles.emailButtonText}>Open email app</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={[globalStyle.TextInputSecondary, styles.textInputSpacing]}
            keyboardType="number-pad"
          />
          <TouchableOpacity style={globalStyle.buttonPrimary}>
            <Text style={globalStyle.buttonTextPrimary}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <Text style={styles.footerText}>
          Haven't received the email? Send it again or use our feedback form to
          get in touch with us.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PasswordlessSignInScreen;
