import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { icons, logos } from "../constants";

const HomeScreen = () => {
  return (
    <View style={styles.homeWrapper}>
      <Image source={logos.logoIcon} style={styles.homeImg} />

      <Text style={styles.homeText}>Hello</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeImg: {
    width: 120,
    height: 120,
  },
  homeText: {
    marginTop: 16,
    fontSize: 36,
    fontWeight: "bold",
  },
});
