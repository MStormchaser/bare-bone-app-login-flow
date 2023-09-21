import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  headerWrapper: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: SIZES.medium,
    marginTop: SIZES.large,
  },
  headerIconWrapper: {
    flex: 1,
    padding: SIZES.small,
    paddingLeft: 0,
    //backgroundColor: COLORS.black,
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
    //marginLeft: SIZES.xLarge * -1,
    marginLeft: SIZES.large * -1,
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
