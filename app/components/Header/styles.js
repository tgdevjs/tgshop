import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar } from "react-native";

const styles = EStyleSheet.create({
  $underlayColorBase: "$white",
  $underlayColorModifier: 0.1,
  container: {
    height: 60,
    backgroundColor: "$white",
    justifyContent: "center",
    alignItems: "center"
  },
  searchHeaderContainer: {
    height: 40,
    backgroundColor: "$border",
    justifyContent: "center",
    alignItems: "center"
  },
  searchContainer: {
    flexDirection: "row",
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$white"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10
  },
  buttonHighlight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  searchInput: {
    flex: 1,
    color: "$inputText",
    marginHorizontal: 5,
    fontSize: 20
  },
  searchText: {
    color: "$inputText",
    fontSize: 16,
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
