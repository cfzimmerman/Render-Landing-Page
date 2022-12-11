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
import { ScrollView } from "react-native-gesture-handler";

interface AboutPropTypes {
  navigation: any;
}
//

const About = ({ navigation }: AboutPropTypes) => {
  const dispatch = useDispatch();
  const windowDimensions = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
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
      <View
        style={[
          styles.paddingwrapper,
          { minHeight: windowDimensions.height, width: windowDimensions.width },
        ]}
      >
        <NavBar
          windowDimensions={windowDimensions}
          dispatch={dispatch}
          origin={"About"}
          navigation={navigation}
        />
        <View
          style={[
            styles.headerwrapper,
            {
              marginTop: windowDimensions.width * 0.22,
              marginBottom: windowDimensions.width * 0.11,
            },
          ]}
        >
          <Text
            style={[GlobalStyles.h1, GlobalStyles.textShadow, styles.header]}
          >
            [ATTENTION GET]
          </Text>
          <Text
            style={[
              GlobalStyles.textShadow,
              GlobalStyles.p1,
              {
                color: Colors.AccentOn,
                width: "80%",
                textAlign: "justify",
                marginBottom: Environment.largePadding,
              },
            ]}
          >
            {`According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.\n\nYellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? Barry? Adam? Can you believe this is happening? I can't.`}
          </Text>
          <BlurViewButton
            Action={() => Linking.openURL("mailto:admin@render.game")}
            title={"Get in Touch"}
            accessibilityLabel={"admin@render.game"}
          />
        </View>
      </View>
      <MobileOptionsModal navigation={navigation} origin={"About"} />
    </ScrollView>
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
    // justifyContent: "center",
  },
  header: {
    textAlign: "center",
    color: Colors.AccentOn,
    marginBottom: Environment.largePadding,
  },
});

export default About;
