import { StyleSheet } from "react-native";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";

const styles = StyleSheet.create({
  detailProductContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    top: 45,
    zIndex: 1,
    left: 20,
    borderRadius: "100%",
    padding: 5,
  },
  detailContainer: {
    height: windowHeight,
    width: windowWidth,
    display: "flex",
    alignItems: "center",
    // marginTop: 50,
  },
  img: {
    height: windowHeight / 3,
    width: windowWidth - 10,
    borderRadius: 5,
    marginTop: 80,
    marginBottom: 5,
  },
  infoContainer: {
    width: windowWidth,
    paddingHorizontal: 5,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    textTransform: "capitalize",
    paddingHorizontal: 5,
    color: COLORS.teal,
  },
  description: {
    width: windowWidth / 1.1,
    paddingRight: 20,
    paddingLeft: 5,
    marginVertical: 10,
    color: COLORS.teal,
    opacity: 0.8,
  },
  plusDetail: {
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.orange,
  },
  categoryContainer: {
    paddingLeft: 5,
    marginBottom: 5,
    color: COLORS.teal,
    opacity: 0.8,
    fontSize: 15,
  },
  category: {
    paddingLeft: 5,
    color: COLORS.orange,
    textTransform: "capitalize",
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    textTransform: "capitalize",
    paddingTop: 5,
    paddingLeft: 5,
    color: COLORS.teal,
    fontWeight: "bold",
  },
  sansFrais: {
    paddingLeft: 5,
    paddingBottom: 5,
    color: COLORS.teal,
    opacity: 0.5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
  },
});

export default styles;
