import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
  emptyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyBasket: {
    marginVertical: 15,
    fontSize: 20,
    color: COLORS.teal,
    textAlign: "center",
  },
});

export default styles;
