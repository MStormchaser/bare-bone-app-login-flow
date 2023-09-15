import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surfaceBase,
  },
  marginX: {
    marginHorizontal: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoMedium: {
    height: SIZES.x5Large,
    width: SIZES.x5Large,
  },
  buttonSecondaryRound: {
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    backgroundColor: COLORS.surfacePrimary,
    borderRadius: "50%",
  },
});

export default style;
