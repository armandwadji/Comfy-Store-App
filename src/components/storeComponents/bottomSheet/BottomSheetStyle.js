import { StyleSheet } from "react-native";
import { COLORS, windowWidth } from "../../../constants/theme";

const styles = StyleSheet.create({
  bottomSheetContainer: {
    // height: windowHeight / 2,
    // width: "100%",
    // backgroundColor: COLORS.white,
    // position: "absolute",
    // borderRadius: 30,
    // top: windowHeight / 2,
  },
  line: {
    width: 85,
    height: 4,
    backgroundColor: COLORS.orange,
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
  companiesTitle: {
    marginBottom: 15,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: COLORS.orange,
  },
  companiesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  companyBorder: {
    marginHorizontal: 5,
    padding: 6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.teal,
    fontSize: 15,
  },
  company: {
    textTransform: "capitalize",
    color: COLORS.teal,
  },
  pricetitle: {
    marginVertical: 20,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: COLORS.orange,
  },
  likesContainer: {
    display: 'flex',
    flexDirection: "row",
    alignItems:'center',
  },
  likesTitle: {
    marginVertical: 20,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: COLORS.orange,
  },
  slider: {
    width: windowWidth - 40,
    marginLeft: "auto",
    marginRight: "auto",
    height: 20,
  },
  heart: {
    marginLeft: 15,
    paddingHorizontal:5,
  }
});

export default styles;
