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
            Save today, re-live tomorrow
          </Text>
          <Text
            style={[GlobalStyles.textShadow, GlobalStyles.p1, styles.textBlurb]}
          >
            {`We're building Render for ordinary gamers. Those who love a good story, exploring a new world, or just chilling with friends. People who want to casually share that with the people they care about - show a pic at school, post a link in a Discord server, or toss it on the in-app feed. People who spend time in-game and don't want to lose those valuable experiences when the screen turns off.\n\nRender exists because the time people spend in game matters. We share memories with each other and bond over them, but there's nothing tangible about our in-game lives to hang on to as the years slip by. Render marks a fundamental change. It allows us to preserve, re-live, and bond over our virtual experiences for years to come. If this interests you, apply for our Beta at the link in the description so you can build the platform with us!`}
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
  textBlurb: {
    color: Colors.AccentOn,
    width: "80%",
    textAlign: "justify",
    marginBottom: Environment.largePadding,
  },
});

export default About;
