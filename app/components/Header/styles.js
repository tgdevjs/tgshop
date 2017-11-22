import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar } from "react-native";

const styles = EStyleSheet.create({
  $underlayColorBase: "$white",
  $underlayColorModifier: 0.1,

  searchHeaderContainer: {
    height: 60,
    backgroundColor: "$border",
    justifyContent: "center",
    alignItems: "center"
  },
  searchContainer: {
    flexDirection: "row",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$white",
    borderRadius: 5
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center"
  },
  buttonHighlight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  searchInput: {
    width: 200,
    color: "$inputText",
    marginHorizontal: 5
  },
  searchText: {
    color: "$inputText",
    fontSize: 12,
    marginHorizontal: 5
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});

export default styles;
