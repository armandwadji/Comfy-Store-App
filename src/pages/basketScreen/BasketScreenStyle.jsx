import { StyleSheet } from "react-native";
import { COLORS, windowWidth } from "../../constants/theme";

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
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  line: {
    backgroundColor: COLORS.background,
    height: 1.5,
    width: windowWidth / 1.05,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
  },
  left: {
    flex: 1,
    paddingLeft: 5,
  },
  rigth: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  livraison: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 10,
  },
  paiement: {
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  treeTimesContainer: {
    borderWidth: 1,
    borderRadius: "200",
    backgroundColor: COLORS.black,
    color: COLORS.white,
    padding: 3,
  },
  treeTimes: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
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
  deleteContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
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
  reductionCodeContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  reductionCode: {
    marginHorizontal: 10,
    fontWeight: "300",
    alignItems: "center",
  },
  addCode: {
    fontWeight: "300",
    textDecorationLine: "underline",
  },
  applicationContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  textInput: {
    flex: 3,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderColor: COLORS.background,
    marginRight: 10,
  },
  btn: {
    flex: 2,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  LivraisonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  livraisonLeft: {
    flex: 3.5,
    marginHorizontal: 10,
  },
  ligne: {
    flexDirection: "row",
  },
  icon: {
    flex: 1,
  },
  text: {
    flex: 8,
    fontWeight: "300",
  },
  livraisonRight: {
    flex: 0.5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default styles;
