import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { Dimensions, Text } from "react-native";

const { height } = Dimensions.get("window");

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${height * 0.75}px;
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
            resizeMode="contain"
            source={{
              uri:
                "https://fanart.tv/fanart/movies/474350/hdmovielogo/it-chapter-2-5d3140f6d7110.png",
            }}
          />
        </TitleArea>
        <Text style={{color:"white"}}>sadasfasdf</Text>
      </Poster>
    </>
  );
};

export default Feature;
