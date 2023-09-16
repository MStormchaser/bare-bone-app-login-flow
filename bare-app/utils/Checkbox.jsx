import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { CheckIcon, HeartIcon } from "react-native-heroicons/solid";
import { COLORS } from "../constants";
// const [selected, setSelected] = useState(false);

const Checkbox = ({ selected, onSelectedChange }) => {
  return (
    <TouchableOpacity
      style={styles.checkbox}
      onPress={() => onSelectedChange(!selected)}
    >
      {selected && <HeartIcon width={15} height={15} color={"#000"} />}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.black,
    alignItems: "center", // to ensure the check icon is centered
    justifyContent: "center", // to ensure the check icon is centered
  },
});
