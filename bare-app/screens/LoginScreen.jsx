import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/globalStyle";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.marginX}>
        <View style={styles.header}>
          <View>
            <Image
              source={require("../assets/logos/max-power-icon.png")}
              style={styles.logoMedium}
            />
          </View>
          <TouchableOpacity>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
