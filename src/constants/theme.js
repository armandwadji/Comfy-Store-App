import { Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const COLORS = {
  orange: "#BA5D2C",
  white: "#FFFFFF",
  black: "#070B0D",
  teal: "#102A42",
  background: "#F1F5F8",
};

export { windowWidth, windowHeight, COLORS };
