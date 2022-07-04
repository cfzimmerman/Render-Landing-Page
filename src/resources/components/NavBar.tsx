import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import NavButtonBlock from "./NavButtonBlock";
import { Menu } from "react-native-feather";
import { BlurView } from "expo-blur";
import { setNavOptionsActive } from "../../redux/general";
import { Environment, GlobalStyles, Colors } from "../project";
import { WindowDimensionsType } from "../../pages/LandingMain";
import * as Linking from "expo-linking";
import IsActive from "../utils/IsActive";
import { DispatchType } from "../../redux/store";

export type OriginTypes = "Home" | "Contact";

interface NavButtonHolderProps {
  windowDimensions: WindowDimensionsType;
  dispatch: DispatchType;
  origin: OriginTypes;
  navigation: any;
}

const NavButtonHolder = ({
  windowDimensions,
  dispatch,
  origin,
  navigation,
}: NavButtonHolderProps) => {
  if (windowDimensions.height / windowDimensions.width < 1) {
    // Landscape
    return (
      <View style={styles.navbuttonholder}>
        <NavButtonBlock
          title={"Home"}
          active={IsActive({ origin, buttonLabel: "Home" })}
          Action={() => navigation.navigate("LandingMain")}
        />
        <NavButtonBlock
          title={"Contact"}
          active={IsActive({ origin, buttonLabel: "Contact" })}
          Action={() => navigation.navigate("Contact")}
        />
        <NavButtonBlock
          title={"Log in"}
          active={false}
          Action={() => Linking.openURL("https://www.app.render.game/")}
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
          style={styles.menuicon}
        />
      </TouchableOpacity>
    );
  }
};

const NavLogo = ({
  windowDimensions,
  navigation,
}: {
  windowDimensions: WindowDimensionsType;
  navigation: any;
}) => {
  if (windowDimensions.height / windowDimensions.width < 1) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("LandingMain")}
        style={styles.navlogowrapper}
      >
        <Image
          source={{
            uri: "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-LongLogoDark.png",
          }}
          style={styles.navlogo}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("LandingMain")}
        style={styles.largenavlogowrapper}
      >
        <Image
          source={{
            uri: "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-SingleLogo.png",
          }}
          style={styles.largenavlogo}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    );
  }
};

interface NavBarPropTypes {
  windowDimensions: WindowDimensionsType;
  dispatch: DispatchType;
  origin: OriginTypes;
  navigation: any;
}

const NavBar = ({
  windowDimensions,
  dispatch,
  origin,
  navigation,
}: NavBarPropTypes) => {
  return (
    <BlurView intensity={80} style={[GlobalStyles.shadow, styles.navbar]}>
      <NavLogo windowDimensions={windowDimensions} navigation={navigation} />
      <NavButtonHolder
        windowDimensions={windowDimensions}
        dispatch={dispatch}
        origin={origin}
        navigation={navigation}
      />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  navbuttonholder: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navlogowrapper: {
    height: "100%",
    width: "20%",
  },
  navlogo: {
    height: "100%",
    width: "100%",
  },
  largenavlogowrapper: {
    height: "80%",
    width: "20%",
  },
  largenavlogo: {
    width: "100%",
    height: "100%",
  },
  menuicon: {
    margin: Environment.standardPadding,
  },
  navbar: {
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
});

export default NavBar;
