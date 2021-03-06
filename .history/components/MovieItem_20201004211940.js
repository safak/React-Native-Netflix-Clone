import React from "react";
import styled from "styled-components/native";

const Poster = styled.Image`
  height: 130px;
  width: 100px;
  border-radius: 10px;
  margin-right: 10px;
`;

const Logo = styled.Image`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const Top10Logo = styled.Image`
  height: 130px;
  width: 100px;
  border-radius: 10px;
  margin-right: 10px;
`;

const MovieItem = ({ item }) => {
  return (
    <>
      <Poster source={{ uri: item.poster }} />
      <Logo
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png",
        }}
        resizeMode="contain"
      />
    </>
  );
};

export default MovieItem;
