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
import styles from "../styles/signUp/signUpConfirmationScreen.style";

const SignUpConfirmationScreen = ({ navigation }) => {
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
        <Text style={styles.headerText}>Confirmation</Text>
        <Text style={styles.spacerHeader}></Text>
      </View>
      {/* Body */}
      <View style={styles.bodyWrapper}>
        <View>
          <Text style={styles.confirmationText}>
            We've sent you a six-digit confirmation code to EMAIL. Please enter
            it below to confirm your email address.
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

export default SignUpConfirmationScreen;
