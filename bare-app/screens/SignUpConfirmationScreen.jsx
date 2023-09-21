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
import styles from "../styles/signUp/signUpConfirmationScreen.style";

const SignUpConfirmationScreen = ({ navigation }) => {
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
            style={[
              globalStyle.TextInputSecondary,
              globalStyle.textInputLarge,
              styles.textInputSpacing,
            ]}
            keyboardType="number-pad"
            maxLength={6}
          />
          <TouchableOpacity
            style={globalStyle.buttonPrimary}
            onPress={() => navigation.navigate("Home")}
          >
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
