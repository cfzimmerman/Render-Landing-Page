import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingMain from "./pages/LandingMain";
import Dump from "./pages/Dump";

type RootStackParamList = {
  LandingMain: undefined;
  Dump: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const PageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LandingMain" component={LandingMain} />
      <Stack.Screen name="Dump" component={Dump} />
    </Stack.Navigator>
  );
};

export default PageStack;
