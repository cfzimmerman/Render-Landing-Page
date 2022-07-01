import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { X } from "react-native-feather";
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

const MobileOptionsModal = ({ origin }: { origin: OriginTypes }) => {
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
      <BlurView tint={"light"} style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={() => dispatch(setNavOptionsActive(false))}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                height: "40%",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <NavButtonBlock
                title={"Home"}
                active={IsActive({ buttonLabel: "Home", origin })}
                Action={() => console.log("Home")}
              />
              <NavButtonBlock
                title={"Contact"}
                active={IsActive({ buttonLabel: "Contact", origin })}
                Action={() => console.log("Contact")}
              />
              <NavButtonBlock
                title={"Log in"}
                active={false}
                Action={() => console.log("Log in")}
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

export default MobileOptionsModal;
