import { StyleSheet } from "react-native";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  imgBackground: {
    width: windowWidth,
    height: windowHeight,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  infoContainer: {
    position: "absolute",
    top: "40%",
    left: "10%",
    zIndex: 10,
  },
  text: {
    // fontFamily: "title",
    color: COLORS.white,
    fontSize: 60,
    textTransform: "capitalize",
  },
});

export default styles;
