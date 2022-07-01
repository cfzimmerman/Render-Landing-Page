import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Environment, GlobalStyles, Colors } from "../project";

export interface NavButtonBlockPropTypes {
  title: string;
  active: boolean;
  Action: Function;
}

const NavButtonBlock = ({ title, active, Action }: NavButtonBlockPropTypes) => {
  return (
    <TouchableOpacity
      onPress={() => Action()}
      hitSlop={{
        top: Environment.standardPadding,
        bottom: Environment.standardPadding,
        left: Environment.standardPadding,
        right: Environment.standardPadding,
      }}
    >
      <View style={{ marginHorizontal: Environment.standardPadding }}>
        <Text
          style={[
            GlobalStyles.textShadow,
            {
              color: Colors.Primary,
              fontSize: 32,
              textDecorationLine: active ? "underline" : "none",
            },
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NavButtonBlock;
