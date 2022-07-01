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
      <View style={styles.navbuttonwrapper}>
        <Text
          style={[
            GlobalStyles.textShadow,
            styles.buttonlabel,
            {
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

const styles = StyleSheet.create({
  navbuttonwrapper: {
    marginHorizontal: Environment.standardPadding,
  },
  buttonlabel: {
    color: Colors.Primary,
    fontSize: 32,
  },
});

export default NavButtonBlock;
