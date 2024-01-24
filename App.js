import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { FlatList, Alert, View, ActivityIndicator, Text } from "react-native";
import { Post } from "./components/Post";
import axios from "axios";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://65b0f0d3d16d31d11bdd9edd.mockapi.io/pocemons/pocemons")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert("Error", "Can't fetch data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(fetchPosts, []);

  if (isLoading) {
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
  }

  return (
    <View>
      <StatusBar style="auto" />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Post
            imageUrl={item.imageUrl}
            title={item.name}
            createdAt={item.createdAt}
          />
        )}
      />
    </View>
  );
}
