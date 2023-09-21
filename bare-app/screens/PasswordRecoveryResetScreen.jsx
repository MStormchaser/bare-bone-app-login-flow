import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { icons, COLORS } from "../constants";
import globalStyle from "../styles/globalStyle";
import styles from "../styles/signUp/passwordRecoveryReset.style";

const PasswordRecoveryResetScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");

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
        <Text style={styles.headerText}>Reset your password</Text>
        <Text style={styles.spacerHeader}></Text>
      </View>
      {/* Body */}
      <View style={styles.bodyWrapper}>
        <View>
          <Text style={globalStyle.paragraphBase}>
            Please fill in your new password to change it. Make sure it is a
            least 10 characters long and contains special characters.
          </Text>
        </View>
        <View>
          <TextInput
            style={globalStyle.TextInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            selectionColor={COLORS.flamingo}
          />
          <TouchableOpacity
            style={globalStyle.buttonPrimary}
            onPress={() => navigation.navigate("PasswordResetConfirmation")}
          >
            <Text style={globalStyle.buttonTextPrimary}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordRecoveryResetScreen;
