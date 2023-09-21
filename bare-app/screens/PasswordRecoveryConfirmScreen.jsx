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
import styles from "../styles/signUp/passwordRecoveryConfirmation.style";

const PasswordRecoveryConfirmationScreen = ({ navigation }) => {
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
        <Text style={styles.headerText}>Confirm password reset</Text>
        <Text style={styles.spacerHeader}></Text>
      </View>
      {/* Body */}
      <View style={styles.bodyWrapper}>
        <View>
          <Text style={[globalStyle.paragraphBase, styles.confirmationText]}>
            If an account exists for EMAIL we'll send instructions for resetting
            your password. Didn't get them? Check the email address or ask to
            resend the instructions.
          </Text>
          <TouchableOpacity style={styles.emailButton}>
            <Text style={styles.emailButtonText}>Open email app</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={globalStyle.spacerVerticalLarge}></View>
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
            onPress={() => navigation.navigate("PasswordRecoveryReset")}
          >
            <Text style={globalStyle.buttonTextPrimary}>Confirm</Text>
          </TouchableOpacity>
          <View style={globalStyle.spacerVerticalBase}></View>
          <TouchableOpacity style={globalStyle.buttonSecondaryText}>
            <View style={globalStyle.buttonSecondaryUnderline}>
              <Text style={globalStyle.paragraphBase}>
                Resend the instructions again
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordRecoveryConfirmationScreen;
