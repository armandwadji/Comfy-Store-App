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
  imgcontainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 100,
  },
  infoContainer: {
    position: "absolute",
    top: "40%",
    left: "10%",
    zIndex: 10,
  },
  img: {
    height: 60,
    width: 100,
  },
  text: {
    color: COLORS.white,
    fontSize: 60,
    textTransform: "capitalize",
  },
});

export default styles;
