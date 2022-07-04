import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { X } from "react-native-feather";
import * as Linking from "expo-linking";
import NavButtonBlock from "./NavButtonBlock";
import { BlurView } from "expo-blur";
import IsActive from "../utils/IsActive";
import { useDispatch, useSelector } from "react-redux";
import { Environment, Colors } from "../project";
import { RootStateType } from "../../redux/store";
import { setNavOptionsActive } from "../../redux/general";
import { OriginTypes } from "./NavBar";

export interface MobileOptionsModalPropTypes {
  navigation: any;
}

// NEXT: Turn buttons into an exported component. Import for use here.

const MobileOptionsModal = ({
  origin,
  navigation,
}: {
  origin: OriginTypes;
  navigation: any;
}) => {
  const dispatch = useDispatch();
  const navOptionsActive = useSelector(
    (state: RootStateType) => state.general.navOptionsActive
  );

  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={navOptionsActive}
      onRequestClose={() => dispatch(setNavOptionsActive(false))}
    >
      <BlurView tint={"light"} style={styles.blurviewwrapper}>
        <TouchableWithoutFeedback
          onPress={() => dispatch(setNavOptionsActive(false))}
        >
          <View style={styles.container}>
            <View style={styles.navbuttonwrapper}>
              <NavButtonBlock
                title={"Home"}
                active={IsActive({ buttonLabel: "Home", origin })}
                Action={() => {
                  navigation.navigate("LandingMain");
                  dispatch(setNavOptionsActive(false));
                }}
              />
              <NavButtonBlock
                title={"Contact"}
                active={IsActive({ buttonLabel: "Contact", origin })}
                Action={() => {
                  navigation.navigate("Contact");
                  dispatch(setNavOptionsActive(false));
                }}
              />
              <NavButtonBlock
                title={"Log in"}
                active={false}
                Action={() => Linking.openURL("https://www.app.render.game/")}
              />
              <TouchableOpacity
                onPress={() => dispatch(setNavOptionsActive(false))}
              >
                <X
                  height={Environment.squareUnit * 1.75}
                  width={Environment.squareUnit * 1.75}
                  stroke={Colors.Primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  blurviewwrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navbuttonwrapper: {
    height: "40%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MobileOptionsModal;
