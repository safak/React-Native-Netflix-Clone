import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { Dimensions, Text } from "react-native";

const { height } = Dimensions.get("window");

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${height * 0.8}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const TitleArea = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: 50px;
`;

const TitleBanner = styled.Image`
  height: 100px;
  width: 100%;
`;

const Feature = () => {
  return (
    <>
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
        <TitleArea>
          <TitleBanner
            source={{
              uri:
                "https://lh3.googleusercontent.com/proxy/YBzjLyqkG8fP_ejbnIEp1JQNDHAugDvAFDjaqj2jyWXsQ3L8-gQ7rlBraRXTUkI6DYh7kQSTKfCENMW6xwDB7QW1_Q",
            }}
          />
        </TitleArea>
      </Poster>
    </>
  );
};

export default Feature;
