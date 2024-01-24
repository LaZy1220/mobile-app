import { View, ActivityIndicator, Text } from "react-native";

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      <ActivityIndicator size="large" />
      <Text>Fetching is progress...</Text>
    </View>
  );
};
