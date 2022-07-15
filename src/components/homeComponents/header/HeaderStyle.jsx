import { StyleSheet } from "react-native";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  imgBackground: {
    width: windowWidth,
    height: windowHeight,
  },
  infoContainer: {
    position: "absolute",
    top: "40%",
    left: "10%",
  },
  text: {
    color: COLORS.white,
    fontSize: 50,
    textTransform: "capitalize",
  },
  btnContainer: {
    borderWidth: 2,
    width: 100,
    borderColor: COLORS.white,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
  btn: {
    color: COLORS.white,
    fontSize: 15,
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export default styles;