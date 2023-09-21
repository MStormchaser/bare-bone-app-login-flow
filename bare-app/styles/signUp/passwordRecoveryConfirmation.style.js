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
  },
  headerIcon: {
    height: SIZES.xxLarge,
    width: SIZES.xxLarge,
    resizeMode: "contain",
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
  bodyWrapper: {
    flex: 0.5,
    marginHorizontal: SIZES.medium,
    justifyContent: "space-between",
  },
  confirmationText: {
    marginTop: SIZES.medium,
  },
  emailButton: {
    marginTop: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    backgroundColor: COLORS.white,
    borderColor: COLORS.surfaceSecondary,
    borderWidth: 1,
    borderRadius: "50%",
    alignSelf: "flex-start",
  },
  emailButtonText: {
    fontSize: SIZES.medium,
  },
  textInputSpacing: {
    marginBottom: SIZES.large,
  },
});

export default styles;
