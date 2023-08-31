import { StyleSheet } from "react-native";
import { COLORS, windowHeight, windowWidth } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 5,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: COLORS.grey,
    padding: 5,
    backgroundColor: COLORS.grey,
  },
  infoContainer: {
    width: "100%",
  },
  name: {
    textTransform: "capitalize",
    color: COLORS.teal,
    fontSize: 10,
    marginVertical: 5,
  },
  price: {
    fontSize: 15,
    color: COLORS.teal,
    fontWeight: "bold",
  },
});

export default styles;
