import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { FullPostScreen } from "./screens/FullPostScreen";

export default function App() {
  return (
    <View>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
