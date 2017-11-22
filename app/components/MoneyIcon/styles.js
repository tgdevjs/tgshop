import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const styles = EStyleSheet.create({
  container: {
    width: 16,
    height: 14,
    borderRadius: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "$darkBorder",
    backgroundColor: "$moneyGreen",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "$white",
    fontSize: 9,
    fontWeight: "800"
  }
});

export default styles;
