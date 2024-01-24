import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  padding: 10px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const TitleText = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
`;

export default function App() {
  return (
    <ScrollView style={{ paddingTop: 20 }}>
      <TitleText>Pokemon's</TitleText>
      <Post>
        <PostImage
          source={{ uri: "https://pokemongolife.ru/p/Bulbasaur.png" }}
        />
      </Post>
      <Post>
        <PostImage
          source={{ uri: "https://pokemongolife.ru/p/Charmander.png" }}
        />
      </Post>
      <Post>
        <PostImage
          source={{ uri: "https://pokemongolife.ru/p/Caterpie.png" }}
        />
      </Post>
      <Post>
        <PostImage
          source={{ uri: "https://pokemongolife.ru/p/Squirtle.png" }}
        />
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Weedle.png" }} />
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Pidgey.png" }} />
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Rattata.png" }} />
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Fearow.png" }} />
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Ekans.png" }} />
      </Post>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
