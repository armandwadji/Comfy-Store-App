import { StyleSheet } from "react-native";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";

const styles = StyleSheet.create({
  textInform: {
    fontSize: 25,
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 10,
    color: COLORS.teal,
  },
  imgContainer: {
    width: windowWidth,
    height: windowHeight / 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "50%",
  },
});

export default styles;
