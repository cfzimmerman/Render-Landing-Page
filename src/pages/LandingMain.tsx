import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { BlurView } from "expo-blur";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "react-native-feather";
import MobileOptionsModal from "../resources/components/MobileOptionsModal";
import NavButtonBlock from "../resources/components/NavButtonBlock";
import { Colors, Environment, GlobalStyles } from "../resources/project";
import { DispatchType, RootStateType } from "../redux/store";
import NavBar from "../resources/components/NavBar";
import backgroundContent from "../resources/backgroundContent";
import { BackgroundContentObject } from "../resources/backgroundContent";
import { setNavOptionsActive } from "../redux/general";
import BlurViewButton from "../resources/components/BlurViewButton";

export interface WindowDimensionsType {
  height: number;
  width: number;
  scale: number;
  fontScale: number;
}

interface UpdateIndexProps {
  contentIndex: number;
  setContentIndex: Function;
  backgroundContent: BackgroundContentObject[];
}

interface LandingMainProps {
  navigation: any;
  route: any;
}

const LandingMain = ({ navigation, route }: LandingMainProps) => {
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  const flatListRef = useRef<FlatList<any>>(null);

  const ChangeIndex = (previousIndex: number) => {
    if (typeof backgroundContent[previousIndex + 1] === "undefined") {
      return 0;
    } else {
      return previousIndex + 1;
    }
  };

  flatListRef.current?.scrollToIndex({ animated: true, index });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(ChangeIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const windowDimensions = useWindowDimensions();

  interface ItemObject {
    item: BackgroundContentObject;
  }

  const renderItem = ({ item }: ItemObject) => {
    return (
      <Image
        source={{ uri: item.address }}
        style={{
          width: windowDimensions.width,
          height: windowDimensions.height,
        }}
      />
    );
  };

  const GetItemLayout = (data: any, index: number) => {
    return {
      length: windowDimensions.height,
      offset: windowDimensions.height * index,
      index,
    };
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={backgroundContent}
        renderItem={renderItem}
        ref={flatListRef}
        // initialScrollIndex={2}
        scrollEnabled={true}
        keyExtractor={(item) => item.address}
        showsVerticalScrollIndicator={false}
        style={[
          styles.flatliststyle,
          {
            width: windowDimensions.width,
            height: windowDimensions.height,
          },
        ]}
        getItemLayout={GetItemLayout}
      />
      <View style={styles.paddingwrapper}>
        <NavBar
          windowDimensions={windowDimensions}
          dispatch={dispatch}
          origin={"Home"}
          navigation={navigation}
        />

        <View style={styles.headerwrapper}>
          <Text
            style={[GlobalStyles.h1, GlobalStyles.textShadow, styles.header]}
          >
            Save forever, share anywhere.
          </Text>
          <View />
          <View>
            <Text style={[GlobalStyles.h2, styles.subheader]}>Now in Beta</Text>
            <BlurViewButton
              Action={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdeacr-mRudJqcRZC5Ofy5Eoe5VnYAG-HIKSSM5C0_L0valFQ/viewform?usp=pp_url&entry.1470519735=*WB"
                )
              }
              title={"Apply for access"}
              accessibilityLabel={
                "https://docs.google.com/forms/d/e/1FAIpQLSdeacr-mRudJqcRZC5Ofy5Eoe5VnYAG-HIKSSM5C0_L0valFQ/viewform?usp=pp_url&entry.1470519735=*WB"
              }
            />
          </View>
        </View>
      </View>
      <MobileOptionsModal origin={"Home"} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },
  flatliststyle: {
    flex: 1,
    position: "absolute",
  },
  paddingwrapper: {
    height: "100%",
    padding: "2%",
  },
  headerwrapper: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    color: Colors.AccentOn,
  },
  subheader: {
    color: Colors.AccentOn,
    textAlign: "center",
  },
});

export default LandingMain;
