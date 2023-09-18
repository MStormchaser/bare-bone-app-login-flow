import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { icons, logos } from "../constants";

const HomeScreen = ({ navigation }) => {
  const openUrl = () => {
    Linking.openURL("https://www.youtube.com/channel/UClHUU0lDA7wKPMo0BU-OGqg");
  };

  return (
    <View style={styles.homeWrapper}>
      <View style={styles.homeHeroContainer}>
        <View style={styles.homeHeroLeft}></View>
        <View style={styles.homeHeroRight}></View>
        <View style={styles.homeHeroRightBottom}></View>
        <View style={styles.homeHeroLeftBottom}></View>
        <Text style={styles.homeHeroText}>WELCOME, YOU ARE LOGGED IN</Text>
      </View>
      <Image source={logos.logoIcon} style={styles.homeImg} />
      <Text style={styles.homeText}>Follow me on YouTube</Text>
      <TouchableOpacity onPress={openUrl} style={styles.homeButtonYT}>
        <Text style={{ fontWeight: "bold" }}>🤙 Salty Flamingo 🤙</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeButtonSignOut}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  homeHeroContainer: {
    maxWidth: "75%",
    marginBottom: 64,
    position: "relative",
    padding: 24,
  },
  homeHeroLeft: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#3A3A3A",
    height: 16,
    width: 16,
    position: "absolute",
    //backgroundColor: "#000",
  },
  homeHeroRight: {
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: "#3A3A3A",
    height: 16,
    width: 16,
    position: "absolute",
    top: 0,
    right: 0,
  },
  homeHeroRightBottom: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#3A3A3A",
    height: 16,
    width: 16,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  homeHeroLeftBottom: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#3A3A3A",
    height: 16,
    width: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  homeHeroText: {
    fontSize: 30,
    color: "#FF66B2",
    fontWeight: "bold",
    textAlign: "center",
  },
  homeImg: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  homeText: {
    marginTop: 16,
    fontSize: 36,
    fontWeight: "bold",
  },
  homeButtonYT: {
    marginTop: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF66B2",
    borderRadius: 50,
  },
  homeButtonSignOut: {
    marginTop: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
  },
});
