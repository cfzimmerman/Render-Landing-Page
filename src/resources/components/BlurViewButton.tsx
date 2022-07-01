import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { GlobalStyles, Environment, Colors } from "../project";

const BlurViewButton = ({
  Action,
  title,
  accessibilityLabel,
}: {
  Action: Function;
  title: string;
  accessibilityLabel: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => Action()}
      accessibilityLabel={accessibilityLabel}
    >
      <BlurView
        intensity={80}
        tint="light"
        style={[GlobalStyles.shadow, styles.buttonwrapper]}
      >
        <Text
          style={[GlobalStyles.p1, GlobalStyles.textShadow, styles.buttonlabel]}
        >
          {title}
        </Text>
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonwrapper: {
    backgroundColor: "pink",
    margin: Environment.standardPadding,
    borderRadius: Environment.smallPadding,
  },
  buttonlabel: {
    textAlign: "center",
    color: Colors.Primary,
    margin: Environment.smallPadding,
  },
});

export default BlurViewButton;
