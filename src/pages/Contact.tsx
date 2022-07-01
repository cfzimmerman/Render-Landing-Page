import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import BlurViewButton from "../resources/components/BlurViewButton";
import MobileOptionsModal from "../resources/components/MobileOptionsModal";
import NavBar from "../resources/components/NavBar";
import * as Linking from "expo-linking";
import { Environment, Colors, GlobalStyles } from "../resources/project";

interface ContactPropTypes {
  navigation: any;
}
//

const Contact = ({ navigation }: ContactPropTypes) => {
  const dispatch = useDispatch();
  const windowDimensions = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.backgroundwrapper,
          { height: windowDimensions.height, width: windowDimensions.width },
        ]}
      >
        <Image
          source={{
            uri: "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-ContactHeader2.png",
          }}
          resizeMode={"cover"}
          style={{
            height: windowDimensions.width * 0.5,
            width: windowDimensions.width,
          }}
          // Styling above only works for an image with a 2:1 aspect ratio
        />
      </View>
      <View style={styles.paddingwrapper}>
        <NavBar
          windowDimensions={windowDimensions}
          dispatch={dispatch}
          origin={"Contact"}
          navigation={navigation}
        />
        <View style={styles.headerwrapper}>
          <Text
            style={[GlobalStyles.h1, GlobalStyles.textShadow, styles.header]}
          >
            Let's talk
          </Text>
          <BlurViewButton
            Action={() => Linking.openURL("mailto:admin@render.game")}
            title={"Send us an email"}
            accessibilityLabel={"admin@render.game"}
          />
        </View>
      </View>
      <MobileOptionsModal navigation={navigation} origin={"Contact"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  backgroundwrapper: {
    position: "absolute",
    alignItems: "center",
  },
  paddingwrapper: {
    height: "100%",
    padding: "2%",
  },
  headerwrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    color: Colors.AccentOn,
    marginBottom: Environment.standardPadding,
  },
});

export default Contact;
