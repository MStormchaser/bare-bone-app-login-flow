import { COLORS, SIZES } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    marginHorizontal: SIZES.large,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerImg: {
    height: SIZES.x5Large,
    width: SIZES.x5Large,
  },
  headerBtn: {
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    backgroundColor: COLORS.surfacePrimary,
    borderRadius: "50%",
  },
  containerBdy: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: SIZES.medium,
  },
  bodyPwForgetLink: {
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.surfaceSecondary,
    paddingTop: SIZES.medium,
    paddingBottom: SIZES.xLarge,
  },
  buttonMagicLinkWrapper: {
    width: "100%",
    height: SIZES.x5Large,
    borderColor: COLORS.surfacePrimary,
    borderRadius: SIZES.xxSmall,
    borderWidth: 2,
    justifyContent: "center",
  },
  buttonMagicLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonMagicLinkTextLeft: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    paddingHorizontal: SIZES.small,
  },
  buttonMagicLinkImg: {
    height: SIZES.xLarge,
    width: SIZES.xLarge,
    resizeMode: "contain",
  },
  buttonMagicLinkTextRight: {
    fontSize: SIZES.small,
    color: COLORS.surfaceSecondary,
    paddingHorizontal: SIZES.small,
  },
  buttonSocialWrapper: {
    flexDirection: "row",
  },
  buttonSocialContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonSocialIcon: {
    height: SIZES.large,
    width: SIZES.large,
    resizeMode: "contain",
    marginLeft: SIZES.small,
  },
  buttonSocialText: {
    flex: 1,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    marginLeft: SIZES.xLarge * -1,
  },

  spacerLarge: {
    paddingBottom: SIZES.x5Large,
  },
  spacerHorizontalSmall: {
    paddingHorizontal: SIZES.small,
  },
  spacerVerticalSmall: {
    paddingVertical: SIZES.small,
  },
});

export default styles;
