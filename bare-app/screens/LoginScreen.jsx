import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import styles from "../styles/globalStyle";
import { StyleSheet } from "react-native";
import { COLORS, SIZES, logos } from "../constants";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.containerPrimary}>
      {/* Header */}
      <View>
        <Image source={logos.logoIcon} />
        <TouchableOpacity>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerPrimary: {
    flex: 1,
    backgroundColor: COLORS.surfaceBase,
  },
});
