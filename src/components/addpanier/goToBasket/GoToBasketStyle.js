import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
  goToBasketContainer: {
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addContainer_Text: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "600",
  },
  infosContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    height: 100,
    width: 120,
    borderRadius: 5,
  },
  infos: {
    height: "100%",
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: COLORS.black,
    borderRadius: 2,
  },
  btnText: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 18,
    padding: 15,
  },
});

export default styles;
