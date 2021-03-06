import React from "react";
import styled from "styled-components/native";
import { Video } from 'expo-av';

const StoryScreen = ({ navigation, route }) => {
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
      isLooping
      style={{ width: 300, height: 300 }}
    />
  );
};

export default StoryScreen;
