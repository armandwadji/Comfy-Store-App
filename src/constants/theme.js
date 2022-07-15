import { Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const URLProducts = "https://course-api.com/javascript-store-products";

const COLORS = {
  orange: "#BA5D2C",
  white: "#FFFFFF",
  black: "#070B0D",
  teal: "#102A42",
  background: "#CFD6E0",
};

export { windowWidth, windowHeight, COLORS, URLProducts };
