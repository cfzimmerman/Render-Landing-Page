import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import NavButtonBlock from "./NavButtonBlock";
import { Menu } from "react-native-feather";
import { BlurView } from "expo-blur";
import { setNavOptionsActive } from "../../redux/general";
import { Environment, GlobalStyles, Colors } from "../project";
import { WindowDimensionsType } from "../../pages/LandingMain";
import IsActive from "../utils/IsActive";
import { DispatchType } from "../../redux/store";

export type OriginTypes = "Home" | "Contact";

interface NavButtonHolderProps {
  windowDimensions: WindowDimensionsType;
  dispatch: DispatchType;
  origin: OriginTypes;
}

const NavButtonHolder = ({
  windowDimensions,
  dispatch,
  origin,
}: NavButtonHolderProps) => {
  if (windowDimensions.height / windowDimensions.width < 1) {
    // Landscape
    return (
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <NavButtonBlock
          title={"Home"}
          active={IsActive({ origin, buttonLabel: "Home" })}
          Action={() => console.log("Home")}
        />
        <NavButtonBlock
          title={"Contact"}
          active={IsActive({ origin, buttonLabel: "Contact" })}
          Action={() => console.log("Contact")}
        />
        <NavButtonBlock
          title={"Log in"}
          active={false}
          Action={() => console.log("Log in")}
        />
      </View>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => dispatch(setNavOptionsActive(true))}>
        <Menu
          height={Environment.squareUnit * 1.75}
          width={Environment.squareUnit * 1.75}
          stroke={Colors.Primary}
          style={[{ margin: Environment.standardPadding }]}
        />
      </TouchableOpacity>
    );
  }
};

const NavLogo = ({
  windowDimensions,
}: {
  windowDimensions: WindowDimensionsType;
}) => {
  if (windowDimensions.height / windowDimensions.width < 1) {
    return (
      <Image
        source={{
          uri: "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-LongLogoDark.png",
        }}
        style={{ height: "100%", width: "20%" }}
        resizeMode="contain"
      />
    );
  } else {
    return (
      <Image
        source={{
          uri: "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-SingleLogo.png",
        }}
        style={{ width: "20%", height: "80%" }}
        resizeMode={"contain"}
      />
    );
  }
};

interface NavBarPropTypes {
  windowDimensions: WindowDimensionsType;
  dispatch: DispatchType;
  origin: OriginTypes;
}

const NavBar = ({ windowDimensions, dispatch, origin }: NavBarPropTypes) => {
  return (
    <BlurView
      intensity={80}
      style={[
        GlobalStyles.shadow,
        {
          height: "10%",
          width: "100%",
          backgroundColor: "#35fac5",
          borderRadius: Environment.standardRadius,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75%",
          marginBottom: "2%",
        },
      ]}
    >
      <NavLogo windowDimensions={windowDimensions} />
      <NavButtonHolder
        windowDimensions={windowDimensions}
        dispatch={dispatch}
        origin={origin}
      />
    </BlurView>
  );
};

export default NavBar;
