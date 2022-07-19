import { StyleSheet } from "react-native";
import { COLORS, windowWidth } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
    // marginLeft: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
    width: windowWidth / 2,
  },
  imgContainer: {
    backgroundColor: "green",
    width: "100%",
    height: 250,
    backgroundColor: COLORS.background,
    borderRadius: 5,
    position: "relative",
  },
  img: {
    height: "100%",
    // width: "100%",
    borderRadius: 5,
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 10,
  },
  infoContainer: {
    width: "100%",
  },
  name: {
    textTransform: "capitalize",
    fontSize: 10,
    marginVertical: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
