import { View } from "react-native";
import styled from "styled-components";
import axios from "axios";

import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;
export const FullPostScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://65b0f0d3d16d31d11bdd9edd.mockapi.io/pocemons/pocemons/2")
      .then(({ data }) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert("Error", "Can't fetch data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText>{data.description}</PostText>
    </View>
  );
};
