import React from "react";
import styled from "styled-components/native";
import { Video } from "expo-av";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const StoryScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <Video
      source={{
        uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      style={{ width, height }}
    />
  );
};

export default StoryScreen;
