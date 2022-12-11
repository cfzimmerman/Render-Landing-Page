import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingMain from "./pages/LandingMain";
import About from "./pages/About";

type RootStackParamList = {
  LandingMain: undefined;
  Dump: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const PageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"LandingMain"}
    >
      <Stack.Screen
        name="LandingMain"
        component={LandingMain}
        options={{ animation: "fade", title: "Render" }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ animation: "fade", title: "Render • About" }}
      />
    </Stack.Navigator>
  );
};

export default PageStack;
