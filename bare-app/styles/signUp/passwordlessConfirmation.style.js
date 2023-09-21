import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
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
