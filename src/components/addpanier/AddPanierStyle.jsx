import { StyleSheet } from "react-native";
import { COLORS, windowWidth } from "../../constants/theme";

const styles = StyleSheet.create({
  addButtonContainer: {
    position: "absolute",
    // bottom: 50,
    padding: 10,
    width: windowWidth - 40,
    backgroundColor: COLORS.orange,
    zIndex: 1,
    textAlign: "center",
  },
  addButton: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 20,
  },
});

export default styles;
