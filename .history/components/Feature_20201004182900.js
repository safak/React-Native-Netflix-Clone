import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { StatusBar, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${height * 0.8}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Feature = () => {
  return (
    <Poster
      source={{
        uri:
          "https://i.insider.com/59a81c106eac400d4a8b598a?width=1136&format=jpeg",
      }}
    >
      <Gradient
        locations={[0, 0.2, 0.6, 0.93]}
        colors={[
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,1)",
        ]}
      >
        <Header />
      </Gradient>
    </Poster>
  );
};

export default Feature;
