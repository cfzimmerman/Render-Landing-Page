import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingMain from "./pages/LandingMain";
import Contact from "./pages/Contact";

type RootStackParamList = {
  LandingMain: undefined;
  Dump: undefined;
  Contact: undefined;
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
        name="Contact"
        component={Contact}
        options={{ animation: "fade", title: "Render • Contact" }}
      />
    </Stack.Navigator>
  );
};

export default PageStack;
