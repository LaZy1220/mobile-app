import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  flex-direction: row;
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

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 600;
`;
const PostDetails = styled.View`
  margin-left: 5px;
  gap: 10px;
`;
const PostDescription = styled.Text`
  font-size: 14px;
  width: 240px;
`;

export default function App() {
  return (
    <ScrollView>
      <TitleText>Pokémon's</TitleText>
      <Post>
        <PostImage
          source={{ uri: "https://pokemongolife.ru/p/Bulbasaur.png" }}
        />
        <PostDetails>
          <PostTitle>Bulbasaur</PostTitle>
          <PostDescription>
            It has a plant seed on its back from the day this Pokemon was born.
            The seed grows slowly.
          </PostDescription>
        </PostDetails>
      </Post>
      <Post>
        <PostImage
          source={{ uri: "https://pokemongolife.ru/p/Charmander.png" }}
        />
        <PostDetails>
          <PostTitle>Charmander</PostTitle>
          <PostDescription>
            The flame burning at the tip of the tail is an indicator of his
            emotions. The flame flickers when Charmander is happy. If the
            Pokémon becomes enraged, the flames burn more intensely.
          </PostDescription>
        </PostDetails>
      </Post>
      <Post>
        <PostImage
          source={{ uri: "https://pokemongolife.ru/p/Caterpie.png" }}
        />
        <PostDetails>
          <PostTitle>Caterpie</PostTitle>
          <PostDescription>
            Caterpie has an insatiable appetite. A Pokémon can devour leaves
            larger than its own body right before your eyes. This Pokémon also
            releases a terrifyingly strong odor.
          </PostDescription>
        </PostDetails>
      </Post>
      <Post>
        <PostImage
          source={{ uri: "https://pokemongolife.ru/p/Squirtle.png" }}
        />
        <PostDetails>
          <PostTitle>Squirtle</PostTitle>
          <PostDescription>
            Squirtle uses its shell for more than just protection. This rounded
            shell and grooves on its surface help minimize drag in the water,
            allowing this Pokémon to swim at high speeds.
          </PostDescription>
        </PostDetails>
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Weedle.png" }} />
        <PostDetails>
          <PostTitle>Weedle</PostTitle>
          <PostDescription>
            Weedle has a very keen sense of smell. The Pokémon is able to
            distinguish its favorite types of leaves from those it likes less
            with the help of a large red proboscis.
          </PostDescription>
        </PostDetails>
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Pidgey.png" }} />
        <PostDetails>
          <PostTitle>Pidgey</PostTitle>
          <PostDescription>
            Pidgey has an extremely keen sense of direction. The Pokemon is able
            to accurately return home to its nest, even if it is very far from
            its usual environment.
          </PostDescription>
        </PostDetails>
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Rattata.png" }} />
        <PostDetails>
          <PostTitle>Rattata</PostTitle>
          <PostDescription>
            Раттата проявляет высокую осторожность. Даже во время сна Покемон
            постоянно слушает, двигая своими ушами. Сложно определить, где живет
            это существо, потому что его гнездо может быть в любом месте.
          </PostDescription>
        </PostDetails>
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Fearow.png" }} />
        <PostDetails>
          <PostTitle>Fearow</PostTitle>
          <PostDescription>
            Fearow can be recognized by its long neck and elongated nose. They
            are the ones who help Pokemon catch prey. By deftly moving its long
            and thin beak, you can quickly skin the prey.
          </PostDescription>
        </PostDetails>
      </Post>
      <Post>
        <PostImage source={{ uri: "https://pokemongolife.ru/p/Ekans.png" }} />
        <PostDetails>
          <PostTitle>Ekans</PostTitle>
          <PostDescription>
            Ekans curls up into a spiral when resting. It is possible that this
            position allows the Pokémon to quickly respond to threats from any
            side.
          </PostDescription>
        </PostDetails>
      </Post>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
