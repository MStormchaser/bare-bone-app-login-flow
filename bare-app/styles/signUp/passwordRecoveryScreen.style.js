import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: COLORS.surfaceBase,
  },
  headerWrapper: {
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
  },
  headerText: {
    flex: 3,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",

    marginLeft: SIZES.large * -1,
  },
  spacerHeader: {
    flex: 1,
  },
  bodyWrapper: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.medium,
  },
  heading: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    marginBottom: SIZES.large,
  },
  description: {
    marginBottom: SIZES.x6Large,
    fontSize: SIZES.medium,
    marginHorizontal: SIZES.large,
  },
});

export default styles;
