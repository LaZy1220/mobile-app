import { useState, useEffect } from "react";
import {
  FlatList,
  Alert,
  View,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post";
import { Loading } from "../components/Loading";
import axios from "axios";

export const HomeScreen = () => {
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
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post
              imageUrl={item.imageUrl}
              title={item.name}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
