import { StyleSheet } from "react-native";
import { COLORS, windowWidth } from "../../../../constants/theme";

const styles = StyleSheet.create({
  SAVContainer: {
    marginVertical: 5,
  },

  SAVInfoDetails: {
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  SAVInfo: {
    marginVertical: 5,
    paddingHorizontal: 10,
    opacity: 0.5,
  },
  line: {
    backgroundColor: COLORS.background,
    height: 1.5,
    width: windowWidth / 1.05,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
  },
});

export default styles;
