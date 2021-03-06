import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(props) =>
    props.moviescreen ? `${height * 0.5}px` : `${height * 0.75}px`};
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const TitleArea = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: 0px;
`;

const TitleBanner = styled.Image`
  height: 100px;
  width: 100%;
`;

const TopNumberArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TopNumberCount = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
  border-width: 1px;
  border-color: white;
  padding: 2px;
  text-align: center;
  margin-right: 10px;
`;

const TopNumberText = styled.Text`
  color: white;
  font-weight: bold;
`;

const TitleInfo = styled.View`
  margin-top: 20px;
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.TouchableOpacity``;

const IconText = styled.Text`
  color: #dee2e6;
  font-size: 13px;
`;

const Button = styled.TouchableOpacity`
  background-color: white;
  border-radius: 5px;
  flex-direction: row;
  color: white;
  align-items: center;
  padding: 5px;
`;

const ButtonText = styled.Text`
  color: black;
  font-weight: 700;
`;

const InfoTopContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InfoTopText = styled.Text`
  color: #f1f3f4;
  margin: 10px;
`;

const InfoTopTextLimit = styled.Text`
  color: #f1f3f4;
  margin: 10px;
  background-color: #505050;
  padding: 2px;
  border-radius: 5px;
`;

const Feature = ({ item, moviescreen }) => {
  const hours = item?.duration / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  return (
    <>
      <Poster
        moviescreen={moviescreen}
        source={{
          uri: item?.poster
            ? item.poster
            : "https://i.insider.com/59a81c106eac400d4a8b598a?width=1136&format=jpeg",
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
          {moviescreen && (
            <InfoTopContainer>
              <InfoTopText>{item.year}</InfoTopText>
              <InfoTopTextLimit>+{item.limit}</InfoTopTextLimit>
              <InfoTopText>{`${rhours} h. ${rminutes} m.`}</InfoTopText>
              <MaterialIcons name="hd" size={24} color="white" />
            </InfoTopContainer>
          )}
          <TopNumberArea>
            <TopNumberCount>{`TOP,\n2`}</TopNumberCount>
            <TopNumberText>Top 2 in your country</TopNumberText>
          </TopNumberArea>
          <TitleInfo>
            <Icon>
              <AntDesign name="plus" size={24} color="white" />
              <IconText>List</IconText>
            </Icon>
            <Button>
              <Entypo name="controller-play" size={24} color="black" />
              <ButtonText>Watch</ButtonText>
            </Button>
            <Icon>
              <Feather name="info" size={24} color="white" />
              <IconText>Info</IconText>
            </Icon>
          </TitleInfo>
        </TitleArea>
      </Poster>
    </>
  );
};

export default Feature;
