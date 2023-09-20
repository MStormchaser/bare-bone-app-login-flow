import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  headerWrapper: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: SIZES.large,
    marginTop: SIZES.large,
  },
  headerIconWrapper: {
    flex: 1,
    padding: SIZES.small,
  },
  headerIcon: {
    height: SIZES.xxLarge,
    width: SIZES.xxLarge,
  },
  headerText: {
    flex: 3,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    marginLeft: SIZES.xLarge * -1,
  },
  spacerHeader: {
    flex: 1,
  },
  termsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.xSmall,
  },
  termsTextPadding: {
    paddingLeft: SIZES.small,
  },
  spacerVertical: {
    paddingVertical: SIZES.medium,
  },
});

export default styles;
