import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
`;
const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
const PostDetails = styled.View`
  justify-content: center;
  margin-left: 10px;
`;
const PostDate = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Post = ({ imageUrl, title, createdAt }) => {
  return (
    <PostView>
      <PostImage source={{ uri: imageUrl }} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
