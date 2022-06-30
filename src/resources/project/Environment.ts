import { Dimensions, useWindowDimensions } from "react-native";

const FormatNumber = (number: number) => {
  const numString = number.toFixed(3);
  return parseInt(numString);
};

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const squareUnit = 24;

const standardPadding = squareUnit * 0.8;

const fontSize = {
  h1Size: squareUnit * 2.5,
  h2Size: standardPadding * 2,
  h3Size: squareUnit * 1.2,
  h4Size: standardPadding * 1.2,
  p1Size: squareUnit,
  p2Size: standardPadding * 0.8,
};

const Environment = {
  squareUnit,
  windowHeight,
  windowWidth,
  standardPadding,
  standardRadius: standardPadding,
  largePadding: standardPadding * 2,
  smallPadding: standardPadding / 2,
  fontSize,
};

export default Environment;
