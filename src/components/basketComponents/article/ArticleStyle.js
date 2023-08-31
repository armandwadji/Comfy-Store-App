import { StyleSheet } from "react-native";
import { COLORS, windowWidth } from "../../../constants/theme";

const styles = StyleSheet.create({
  line: {
    backgroundColor: COLORS.background,
    height: 1.5,
    width: windowWidth / 1.05,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
  },
  articleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  left: {
    flex: 1,
    position: "relative",
    marginLeft: 2,
  },
  img: {
    position: "absolute",
    top: 5,
    left: 0,
    height: "50%",
    width: "100%",
    borderRadius: 5,
  },
  rigth: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 5,
  },
  expedition: {
    fontSize: 12,
    opacity: 0.6,
    marginVertical: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 5,
  },
  amount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.background,
    width: 100,
    marginVertical: 5,
  },
  amountCount: {
    fontSize: 16,
  },
  deleteContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
    paddingRight: 15,
  },
  delete: {
    display: "flex",
    flexDirection: "row",
  },
  deleteText: {
    marginLeft: 10,
    opacity: 0.6,
  },
});

export default styles;
