import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.grey,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.orange,
  },
  productsCounts: {
    fontSize: 10,
    opacity: 0.6,
    marginBottom: 10,
  },

  right: {
    display: "flex",
    flexDirection: "row",
  },
  filter: {
    textTransform: "capitalize",
    marginRight: 15,
    color: COLORS.teal,
  },
});

export default styles;
