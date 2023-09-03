import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

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
});

export default styles;
