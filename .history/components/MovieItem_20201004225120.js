import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import * as Font from "expo-font";

const getFont = () => {
  return Font.loadAsync({
    Jacques: require("../assets/fonts/JacquesFrancoisShadow-Regular.ttf"),
  });
};

const Poster = styled.Image`
  height: ${(props) => (props.top10 ? "200px" : "130px")};
  width: ${(props) => (props.top10 ? "150px" : "100px")};
  border-radius: 10px;
  margin-right: 15px;
`;

const Logo = styled.Image`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 5px;
  left: 2px;
`;

const Number = styled.Text`
  font-size: 150px;
  font-weight: bold;
  position: absolute;
  top: 50px;
  left: -22px;
`;

const MovieItem = ({ item, top10, index }) => {
  const [font, setFont] = useState();

  useEffect(() => {
    getFont();
  }, []);
  return (
    <>
      <Poster source={{ uri: item.poster }} resizeMode="cover" top10={top10} />
      {item.original && (
        <Logo
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png",
          }}
          resizeMode="contain"
        />
      )}
      {top10 && <Number>{(index + 1).toString()}</Number>}
    </>
  );
};

export default MovieItem;
