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
import { Colors, Environment, GlobalStyles } from "../resources/project";

interface BackgroundContentObject {
  title: string;
  address: string;
}

const backgroundContent: BackgroundContentObject[] = [
  {
    title: "Valheim",
    address:
      "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-Valheim.jpg",
  },
  {
    title: "Minecraft Sand",
    address:
      "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-MC2.jpeg",
  },
  {
    title: "Forza",
    address:
      "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-Forza.jpeg",
  },
  {
    title: "Animal Crossing: New Horizons",
    address:
      "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-ACNH.JPG",
  },
  {
    title: "NaN",
    address:
      "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-NaN.PNG",
  },
  {
    title: "Breath of the Wild",
    address:
      "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-BOTW2.JPG",
  },
  {
    title: "Red Dead Redemption 2",
    address:
      "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-RDR2.PNG",
  },
  {
    title: "Skyrim",
    address:
      "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-Skyrim.JPG",
  },
  {
    title: "Minecraft Nether",
    address:
      "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-MC.jpeg",
  },
];

const backgroundImages: string[] = [
  "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-Valheim.jpg",
  "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-MC2.jpeg",
  "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-BOTW.jpeg",
  "https://mobile965f75596afb4ca68a1e637998665f92161112-production.s3.amazonaws.com/public/CompanyStock/LandingPage/LP-MC.jpeg",
];

const NavButtonBlock = ({
  title,
  active,
  Action,
}: {
  title: string;
  active: boolean;
  Action: Function;
}) => {
  return (
    <TouchableOpacity onPress={() => Action()}>
      <View style={{ marginHorizontal: Environment.standardPadding }}>
        <Text
          style={[
            GlobalStyles.textShadow,
            {
              color: Colors.Primary,
              fontSize: 32,
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

export interface WindowDimensionsType {
  height: number;
  width: number;
  scale: number;
  fontScale: number;
}

const NavButtonHolder = ({
  windowDimensions,
}: {
  windowDimensions: WindowDimensionsType;
}) => {
  if (windowDimensions.height / windowDimensions.width < 1) {
    // Landscape
    return (
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <NavButtonBlock
          title={"Home"}
          active={true}
          Action={() => console.log("Home")}
        />
        <NavButtonBlock
          title={"Contact"}
          active={false}
          Action={() => console.log("Contact")}
        />
        <NavButtonBlock
          title={"Log in"}
          active={false}
          Action={() => console.log("Contact")}
        />
      </View>
    );
  } else {
    // Portrait
    return null;
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
    return null;
  }
};

interface UpdateIndexProps {
  contentIndex: number;
  setContentIndex: Function;
  backgroundContent: BackgroundContentObject[];
}

const LandingMain = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);

  const flatListRef = useRef<FlatList<any>>(null);

  const ChangeIndex = (previousIndex: number) => {
    if (typeof backgroundContent[previousIndex + 1] === "undefined") {
      return 0;
    } else {
      return previousIndex + 1;
    }
  };

  console.log("Loop");

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
          <NavButtonHolder windowDimensions={windowDimensions} />
        </BlurView>
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
          <View></View>
          <View>
            <Text
              style={[
                GlobalStyles.h2,
                { color: Colors.AccentOn, textAlign: "center" },
              ]}
            >
              Now in Beta
            </Text>
            <TouchableOpacity>
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
    </View>
  );
};

export default LandingMain;
