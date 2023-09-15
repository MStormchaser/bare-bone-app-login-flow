import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const globalStyle = StyleSheet.create({
  buttonPrimary: {
    //width: "100%",
    flex: 1,
    height: SIZES.x5Large,
    maxHeight: SIZES.x5Large,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xxSmall,

    backgroundColor: COLORS.black,
  },
  buttonSecondary: {
    //width: "100%",
    flex: 1,
    height: SIZES.x5Large,
    maxHeight: SIZES.x5Large,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
  buttonTextPrimary: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  buttonTextLightSmall: {
    color: COLORS.surfaceSecondary,
    fontSize: SIZES.small,
  },
});

export default globalStyle;
