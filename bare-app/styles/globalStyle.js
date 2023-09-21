import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const globalStyle = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: COLORS.surfaceBase,
  },
  buttonPrimary: {
    width: "100%",
    height: SIZES.x5Large,
    maxHeight: SIZES.x5Large,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xxSmall,
    backgroundColor: COLORS.black,
  },
  buttonSecondary: {
    width: "100%",
    height: SIZES.x5Large,
    maxHeight: SIZES.x5Large,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
  buttonSecondaryFlex: {
    flex: 1,
  },
  buttonSecondaryText: {
    width: "100%",
    height: SIZES.x5Large,
    maxHeight: SIZES.x5Large,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondaryUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
    paddingBottom: SIZES.xxxSmall,
  },
  buttonTextPrimary: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  buttonTextLightSmall: {
    color: COLORS.surfaceSecondary,
    fontSize: SIZES.small,
  },
  buttonDisabled: {
    flex: 1,
    height: SIZES.x5Large,
    maxHeight: SIZES.x5Large,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xxSmall,
    backgroundColor: COLORS.surfacePrimary,
    borderColor: COLORS.surfaceSecondary,
    borderWidth: 1,
  },
  buttonTextDisabled: {
    color: COLORS.surfaceSecondary,
    fontSize: SIZES.medium,
  },
  containerBdy: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: SIZES.medium,
    paddingBottom: SIZES.x5Large,
  },
  TextInput: {
    width: "100%",
    height: SIZES.x5Large,
    borderColor: COLORS.surfaceSecondary,
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    backgroundColor: COLORS.surfaceBase,
    paddingLeft: SIZES.xxSmall,
    marginBottom: SIZES.medium,
    color: COLORS.black,
  },
  TextInputSecondary: {
    width: "100%",
    height: SIZES.x5Large,
    borderColor: COLORS.surfaceSecondary,
    borderBottomWidth: 2,
    backgroundColor: COLORS.surfaceBase,
    paddingLeft: SIZES.xxSmall,
    marginBottom: SIZES.medium,
    color: COLORS.black,
  },
  textInputLarge: {
    fontSize: SIZES.x3Large,
    textAlign: "center",
    letterSpacing: SIZES.small,
  },
  paragraphBase: {
    fontSize: SIZES.medium,
    lineHeight: 24,
  },
  spacerVerticalBase: {
    paddingVertical: SIZES.xxSmall,
  },
  spacerVerticalLarge: {
    paddingVertical: SIZES.medium,
  },
});

export default globalStyle;
