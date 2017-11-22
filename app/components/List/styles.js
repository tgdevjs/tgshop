import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const styles = EStyleSheet.create({
  $underlayColor: "$border",
  row: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "$white"
  },
  rowIcon: {
    width: 65,
    height: 65,
    marginRight: 20
  },
  rowDetail: {
    flex: 1
  },
  rowDetailRow: {
    flexDirection: "row"
  },
  text: {
    fontSize: 12,
    color: "$darkText"
  },
  caption: {
    fontSize: 12,
    fontWeight: "500",
    color: "$darkText"
  },
  textDetail: {
    fontSize: 11,
    color: "$darkText"
  },
  textDetailCashback: {
    fontSize: 11,
    color: "$moneyGreen"
  },
  textLineThrough: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },
  moneyIcon: {
    paddingHorizontal: 3
  },
  separator: {
    marginLeft: 20,
    backgroundColor: "$border",
    flex: 1,
    height: StyleSheet.hairlineWidth
  }
});

export default styles;
