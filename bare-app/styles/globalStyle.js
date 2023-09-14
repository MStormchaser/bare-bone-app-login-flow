import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const style = StyleSheet.create({
  container: {
    width: "100%",
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
});

export default style;
