import { StyleSheet } from "react-native";
import Environment from "./Environment";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

const GlobalStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  textShadow: {
    textShadowColor: "#00000050",
    textShadowRadius: 5,
    textShadowOffset: { width: 2, height: 4 },
  },
  h1: {
    fontSize: Environment.fontSize.h1Size,
    fontFamily: "Inter_600SemiBold",
  },
  h2: {
    fontSize: Environment.fontSize.h2Size,
    fontFamily: "Inter_500Medium",
  },
  h3: {
    fontSize: Environment.fontSize.h3Size,
    fontFamily: "Inter_400Regular",
  },
  h4: {
    fontSize: Environment.fontSize.h4Size,
    fontFamily: "Inter_500Medium",
  },
  p1: {
    fontSize: Environment.fontSize.p1Size,
    fontFamily: "Inter_500Medium",
  },
  p2: {
    fontSize: Environment.fontSize.p2Size,
    fontFamily: "Inter_400Regular",
  },
});

export default GlobalStyles;
