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
    <View style={{ flex: 1, backgroundColor: Colors.Primary }}>
      <FlatList
        data={backgroundContent}
        renderItem={renderItem}
        ref={flatListRef}
        // initialScrollIndex={2}
        scrollEnabled={true}
        keyExtractor={(item) => item.address}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          width: windowDimensions.width,
          height: windowDimensions.height,
          position: "absolute",
        }}
        getItemLayout={GetItemLayout}
      />
      <View style={{ height: "100%", padding: "2%" }}>
        <NavBar
          windowDimensions={windowDimensions}
          dispatch={dispatch}
          origin={"Home"}
        />

        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              GlobalStyles.h1,
              GlobalStyles.textShadow,
              {
                textAlign: "center",
                color: Colors.AccentOn,
              },
            ]}
          >
            Save forever, share anywhere.
          </Text>
          <View />
          <View>
            <Text
              style={[
                GlobalStyles.h2,
                { color: Colors.AccentOn, textAlign: "center" },
              ]}
            >
              Now in Beta
            </Text>
            <TouchableOpacity
              onPress={() => window.open("https://discord.gg/jkRsESdga4")}
            >
              <BlurView
                intensity={80}
                tint="light"
                style={[
                  GlobalStyles.shadow,
                  {
                    flex: 1,
                    backgroundColor: "pink",
                    margin: Environment.standardPadding,
                    borderRadius: Environment.smallPadding,
                  },
                ]}
              >
                <Text
                  style={[
                    GlobalStyles.p1,
                    GlobalStyles.textShadow,
                    {
                      textAlign: "center",
                      color: Colors.Primary,
                      margin: Environment.smallPadding,
                    },
                  ]}
                >
                  Join our Discord
                </Text>
              </BlurView>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <MobileOptionsModal origin={"Home"} />
    </View>
  );
};

export default LandingMain;
