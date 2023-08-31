import { StyleSheet } from "react-native";
import { COLORS, windowWidth } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
  },
  textInput: {
    left: windowWidth / 2,
    transform: [{ translateX: -windowWidth / 2 + 20 }],
    padding: 10,
    paddingLeft: 40,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 5,
    width: windowWidth - 40,
  },
  icon: {
    position: "absolute",
    top: 8,
    left: "8%",
  },
});

export default styles;
